// terizan por su longitud, anchura y altura.

// Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

// Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

// Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

// fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 }
// ]) // true
// En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 }
// ]

// fitsInOneBox(boxes) // false
// En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

// Ten en cuenta que las cajas pueden no venir en orden:

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ]

// fitsInOneBox(boxes) // true
// En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

// Cosas a tener en cuenta:

// Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
// Las cajas pueden venir desordenadas de tamaño.
// Las cajas no son siempre cuadradas, pueden ser rectangulares.

function fitsInOneBox(boxes) {
    boxes = boxes.map(box => ({
        dims: [box.l, box.w, box.h].sort((a,b) => a-b)
    }));

    boxes.sort((a, b) => a.dims[0] + a.dims[1] + a.dims[2] - (b.dims[0] + b.dims[1] + b.dims[2]));

    for (let i = 0; i < boxes.length - 1; i++) {
        const a = boxes[i].dims;
        const b = boxes[i + 1].dims;
        if (!(a[0] < b[0] && a[1] < b[1] && a[2] < b[2])) {
            return false;
        }
    }
    return true;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes))