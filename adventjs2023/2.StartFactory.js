// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
    const giftsGood = [];

    for (let i = 0; i < gifts.length; i++) {
        let canManufacture = true;

        for (let j = 0; j < gifts[i].length; j++) {
            if (!materials.includes(gifts[i][j])) {
                canManufacture = false;
                break;
            }
        }

        if (canManufacture) {
            giftsGood.push(gifts[i]);
        }
    }

    return giftsGood;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))