// Función dado un arreglo de cadenas `strs` encuentra el prefijo común más largo entre todas ellas.
// Si no existe un prefijo común, la función devuelve una cadena vacía.
// Recorre cada cadena comparándola con el prefijo actual y va acortando el prefijo hasta que coincida con el inicio de cada cadena.

// Function given an array of strings `strs` finds the longest common prefix between all of them.
// If there is no common prefix, the function returns an empty string.
// It goes through each string comparing it with the current prefix and shortens the prefix until it matches the start of each string.

const strs = ["flower","flow","flight"]

const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};

console.log(longestCommonPrefix(strs));
