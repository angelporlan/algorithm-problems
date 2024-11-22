function getIndexsForPalindrome(word) {
    function isPalindrome(str) {
        for (let i = 0, j = str.length - 1; i < j; i++, j--) {
            if (str[i] !== str[j]) return false;
        }
        return true;
    }

    if (isPalindrome(word)) return [];

    const chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            if (isPalindrome(chars.join(''))) return [i, j];
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
    }

    return null;
}


console.log(getIndexsForPalindrome('anna'))
console.log(getIndexsForPalindrome('abab'))

