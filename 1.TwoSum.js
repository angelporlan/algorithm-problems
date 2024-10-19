// Función que encuentra dos números en un array cuyo valor sumado es igual al objetivo (target).
// Retorna un array con los índices de esos dos números, si existen, o null si no se encuentran.

// Function that finds two numbers in an array whose sum value is equal to the target.
// Returns an array with the indices of those two numbers, if they exist, or null if they are not found.

const nums = [2,7,11,15]
const target = 9

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j) {
                return [i, j]
            }            
        }        
    }
    return null
};

console.log(twoSum(nums, target))