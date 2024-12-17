// ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
// Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

// La información que recibes:

// indices: Un array de enteros que representan el progreso de cada reno en la pista:
// 0: El carril está vacío.
// Número positivo: La posición actual del reno desde el inicio de la pista.
// Número negativo: La posición actual del reno desde el final de la pista.
// length: La longitud de cada carril.
// Devuelve un string que represente la pista de la carrera:

// Cada carril tiene exactamente length posiciones llenas de nieve (~).
// Cada reno se representa con la letra r.
// Los carriles están numerados al final con /1, /2, etc.
// La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

function drawRace(indices, length) {
    let race = ''
    let spaces = indices.length - 1
    for (let i = 0; i < indices.length; i++) {
        let lane = '~'.repeat(length)

        if (indices[i] > 0) {
            lane = '~'.repeat(indices[i]) + 'r' + '~'.repeat(length - (indices[i] + 1))
        }

        if (indices[i] < 0) {
            lane = '~'.repeat(length + indices[i]) + 'r' + '~'.repeat(length - ((length + indices[i]) + 1))
        }

        race += ' '.repeat(spaces) + lane + ' /' + (i + 1)

        if (i != indices.length - 1) {
            race += '\n'
        }

        spaces -= 1 
    }

    return race
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/