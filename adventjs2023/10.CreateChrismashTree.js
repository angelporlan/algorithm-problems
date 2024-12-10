// ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

// Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

// Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

// Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

function createChristmasTree(ornaments, height) {
    let tree = ''; 
    const maxWidth = height * 2 - 1 + (height - 1);

    for (let i = 0; i < height; i++) {
        const numAdornments = i + 1; 
        const adornments = Array.from({ length: numAdornments }, (_, j) =>
            ornaments[j % ornaments.length]
        ).join(' '); 
        const spaces = ' '.repeat((maxWidth - adornments.length) / 2);
        tree += spaces + adornments + spaces + '\n';
    }

    const trunkSpaces = ' '.repeat((maxWidth - 1) / 2);
    tree += trunkSpaces + '|' + trunkSpaces + '\n';

    return tree; 
}

console.log(createChristmasTree('abc', 4))

