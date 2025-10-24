// Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

// Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

// Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

// checkPart("uwu") // true
// // "uwu" es un palíndromo sin eliminar ningún carácter

// checkPart("miidim") // true
// // "miidim" puede ser un palíndromo después de eliminar la primera "i"
// // ya que "midim" es un palíndromo

// checkPart("midu") // false
// // "midu" no puede ser un palíndromo después de eliminar un carácter

function checkPart(part) {
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
    
    if (isPalindrome(part)) {
        return true;
    }
    
    let left = 0;
    let right = part.length - 1;
    
    while (left < right) {
        if (part[left] !== part[right]) {
            const withoutLeft = part.slice(0, left) + part.slice(left + 1);
            const withoutRight = part.slice(0, right) + part.slice(right + 1);
            
            return isPalindrome(withoutLeft) || isPalindrome(withoutRight);
        }
        left++;
        right--;
    }
    
    return true;
}

console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter