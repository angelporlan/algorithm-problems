// Dado un número, devuelve el número de formas únicas de subir una escalera de 'n' escalones,
// donde en cada paso puedes subir 1 o 2 escalones.

// Given a number, returns the number of unique ways to climb a staircase of 'n' steps,
// where on each step you can climb 1 or 2 steps.

const climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
};

console.log(climbStairs(5))
console.log(climbStairs(13))
console.log(climbStairs(34))