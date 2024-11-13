// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

function findNaughtyStep(original, modified) {
    for (let i = 0; i < Math.min(original.length, modified.length); i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i];
        }
    }
    
    if (original.length !== modified.length) {
        return original.length > modified.length ? original[original.length - 1] : modified[modified.length - 1];
    }
    
    return '';
}

console.log(findNaughtyStep('abcd', 'abcde'))
console.log(findNaughtyStep('abcde', 'abcd'))