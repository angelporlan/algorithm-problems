// Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

// El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

// Los elfos tienen un sistema especial para organizar los regalos:

// Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
// Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
// Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
// Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

// Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

function organizeGifts(gifts) {
    let numberStart = 0;
    const warehouse = {}
    let stringa = ''

    for (let i = 0; i < gifts.length; i++) {
        if (isNaN(parseInt(gifts[i]))) {
            for (let j = numberStart; j < i; j++) {
                stringa = stringa.concat(gifts[j])                
            }

            warehouse[gifts[i]] = parseInt(stringa) 
            stringa = ''

            numberStart = i + 1
        } 
    }
    let result = ''

    for (let gift in warehouse) {

        while(warehouse[gift] >= 50) {
            result = result.concat(`[${gift}]`)
            warehouse[gift] -= 50
        }

        while(warehouse[gift] >= 10) {
            result = result.concat(`{${gift}}`)
            warehouse[gift] -= 10
        }

        if (warehouse[gift] > 0) {
            result += "(" + gift.repeat(warehouse[gift]) + ")";
        }
        
    }

    return result
}

console.log(organizeGifts('76a11b'))