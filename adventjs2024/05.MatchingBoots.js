// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

function organizeShoes(shoes) {
    const pairs = {}; 
    let result = [];

    shoes.forEach(({ type, size }) => {
        if (!pairs[size]) {
            pairs[size] = { I: 0, R: 0 }; 
        }
        pairs[size][type] += 1;
    });

    for (const size in pairs) {
        const left = pairs[size]['I'];
        const right = pairs[size]['R'];
        const matchedPairs = Math.min(left, right); 

        for (let i = 0; i < matchedPairs; i++) {
            result.push(parseInt(size));
        }
    }

    return result;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];

console.log(organizeShoes(shoes)); 
