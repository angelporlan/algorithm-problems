//Esta función toma dos cadenas como entrada: una cadena principal (haystack) y 
//una subcadena. Devuelve el índice de la primera aparición de la subcadena en 
//la cadena principal. Si la subcadena no se encuentra, devuelve -1

//This function takes two strings as input: a main string (haystack) and
//a substring. It returns the index of the first occurrence of the substring in
//the main string. If the substring is not found, it returns -1

const strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr('mississippi', 'issip'))