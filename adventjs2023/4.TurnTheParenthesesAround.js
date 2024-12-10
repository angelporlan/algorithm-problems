// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
    let stack = [];

    for (let char of message) {
        if (char === ')') {
            let temp = '';
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                temp += stack.pop();
            }
            stack.pop();
            for (let reversedChar of temp) {
                stack.push(reversedChar);
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

console.log(decode('hola (odnum)'))
console.log(decode('(aloh) (odnum)'))