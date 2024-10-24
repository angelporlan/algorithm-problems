// Función que devuelve todas las combinaciones posibles de letras
// correspondientes a los dígitos proporcionados según un teclado de teléfono.

// Function that returns all possible combinations of letters
// corresponding to the digits provided according to a telephone keypad.

const letterCombinations = function(digits) {
    const combinations = {
        '2': ['a', 'b', 'c'], 
        '3': ['d', 'e', 'f'], 
        '4': ['g', 'h', 'i'], 
        '5': ['j', 'k', 'l'], 
        '6': ['m', 'n', 'o'], 
        '7': ['p', 'q', 'r', 's'], 
        '8': ['t', 'u', 'v'], 
        '9': ['w', 'x', 'y', 'z'], 
    }

    if (digits.length === 0) {
        return [];
    }

    let result = combinations[digits[0]];

    for (let i = 1; i < digits.length; i++) {
        let temp = [];
        let currentCombination = combinations[digits[i]];

        for (let prev of result) {
            for (let letter of currentCombination) {
                temp.push(prev + letter);
            }
        }

        result = temp;
    }

    return result;
};

console.log(letterCombinations("234"));
