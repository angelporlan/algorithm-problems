// Función que dado un número romano, devuelve su valor a entero

// Function that, given a Roman numeral, returns its value as an integer

const s = 'MCMXCIV'

const romanToInt = function(s) {
    const romanValor = { I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000 } 
    let x = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(i)
        if (romanValor[s[i]] < romanValor[s[i+1]]) {
            x -= romanValor[s[i]]
        } else {
            x += romanValor[s[i]]
        } 
    }

    return x
};

console.log(romanToInt(s))