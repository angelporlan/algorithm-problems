// Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

// *: Copo de nieve - Valor: 1
// o: Bola de Navidad - Valor: 5
// ^: Arbolito decorativo - Valor: 10
// #: Guirnalda brillante - Valor: 50
// @: Estrella polar - Valor: 100
// Normalmente se sumarían todos los valores de los adornos y ya está…

// Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.

function calculatePrice(ornaments) {

    const prices = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }

    let price = 0
    console.log(prices['s'])

    for (let i = 0; i < ornaments.length; i++) {
        if (prices[ornaments[i]] === undefined) return undefined
        if (prices[ornaments[i]] > prices[ornaments[i - 1]]) price += -(prices[ornaments[i - 1]] * 2) + prices[ornaments[i]]
        else price += prices[ornaments[i]]
    }

    return price   
}

console.log(calculatePrice('***'))
console.log(calculatePrice('*o'))   
console.log(calculatePrice('*oZ'))