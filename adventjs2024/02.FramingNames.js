// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

function createFrame(names) {
    let maxLength = 0
    names.forEach(element => {
        if (element.length > maxLength) maxLength = element.length  
    });

    let frame = ''

    frame = frame.concat('*'.repeat(maxLength + 4) + '\n')

    for (let i = 0; i < names.length; i++) {
        frame = frame.concat('* ')
        const whiteSpaces = maxLength - names[i].length
        frame = frame.concat(names[i] + ' '.repeat(whiteSpaces) + ' *\n')
    }

    frame = frame.concat('*'.repeat(maxLength + 4))

    return frame
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz', 'angel']))

// Resultado esperado:

// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// * angel       *
// ***************