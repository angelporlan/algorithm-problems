// En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.


// Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

// Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

// Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

// Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
// Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
// Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
// Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
// Los caracteres que no son letras (como los dígitos) no se degradan.
// Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.

function checkIsValidCopy(original, copy) {
    function puedeDegradar(a, b) {
      if (a === b) return true;
      if (a >= 'A' && a <= 'Z') return b === a.toLowerCase();
      const degradacion = ['a', 'z', '#', '+', ':', '.', ' '];
      const idx = degradacion.indexOf(a);
      return idx !== -1 && degradacion[idx + 1] === b;
    }
  
    if (original.length !== copy.length) return false;
  
    for (let i = 0; i < original.length; i++) {
      if (!puedeDegradar(original[i], copy[i])) return false;
    }
  
    return true;
  }
  

console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta Cl#us i+ comin#'
  ) )

console.log(checkIsValidCopy(
    's#nta Cla#s is coming',
    'p#nt: cla#s #s c+min#'
  ))