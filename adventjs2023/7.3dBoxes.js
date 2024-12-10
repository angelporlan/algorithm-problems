// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro

function drawGift(size, symbol) {
    let result = '';
    
    const width = 2 * size + 1;
    
    result += ' '.repeat(size) + '#'.repeat(width) + '\n';
    
    for (let i = 1; i < size; i++) {
        result += ' '.repeat(size - i) + '#' + symbol.repeat(i) + '#' + symbol.repeat(size - i) + '#\n';
    }
    
    result += '#'.repeat(width) + '\n';
    
    for (let i = size - 1; i > 0; i--) {
        result += ' '.repeat(size - i) + '#' + symbol.repeat(i) + '#' + symbol.repeat(size - i) + '#\n';
    }
    
    result += ' '.repeat(size) + '#'.repeat(width) + '\n';
    
    return result;
}