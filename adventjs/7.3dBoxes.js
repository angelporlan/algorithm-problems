// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro

function drawGift(size, symbol) {
    const width = 2 * n + 1;
    console.log(' '.repeat(n) + '#'.repeat(width));
    
    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(n - i) + '#' + symbol.repeat(i) + '#' + symbol.repeat(n - i) + '#');
    }
    console.log('#'.repeat(width));
    
    for (let i = n - 1; i > 0; i--) {
        console.log(' '.repeat(n - i) + '#' + symbol.repeat(i) + '#' + symbol.repeat(n - i) + '#');
    }
    
    console.log(' '.repeat(n) + '#'.repeat(width));
}