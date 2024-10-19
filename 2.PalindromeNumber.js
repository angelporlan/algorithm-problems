//Función que dado un numero devuelve True si es palindromo y False si no

//Function that, given a number, returns True if it is a palindrome and False if not

const x = 1441;

const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const xlength = x.toString().length
    const xString = x.toString()
    let y = '';

    for (let i = xlength -1; i >= 0; i--) {
        y += xString[i]
        console.log(xString[i])
    }

    return y === xString

}

console.log(isPalindrome(x))