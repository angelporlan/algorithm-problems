//Dado un array desordenado de enteros, devuelve el positivo mas pequeño

//Given an unsorted integer array nums. Return the smallest positive 
//integer that is not present in nums.

const firstMissingPositive = function(nums) {
    const positiveNums = new Set(nums.filter(num => num > 0));

    let n = 1;
    while (positiveNums.has(n)) {
        n++;
    }

    return n;
};

console.log(firstMissingPositive([2,1,0]))