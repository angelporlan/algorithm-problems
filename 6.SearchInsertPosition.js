// Función que, dado un número objetivo (target) y un array de números ordenados (nums),
// devuelve el índice donde se puede insertar el número objetivo manteniendo el orden.

// Function that, given a target number and a sorted array of numbers (nums),
// returns the index where the target number can be inserted while maintaining the order.

const searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return i
        }            
    }
    return nums.length
};

console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 7))