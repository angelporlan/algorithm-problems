// Función que suma dos números representados por dos arrays en orden inverso

// Function that adds two numbers represented by two arrays in reverse order

const addTwoNumbers = function (l1, l2) {
    const sol = [];
    let carry = 0;

    const maxLength = Math.max(l1.length, l2.length);

    for (let i = 0; i < maxLength; i++) {
        const val1 = l1[i] || 0; 
        const val2 = l2[i] || 0; 

        const sum = val1 + val2 + carry;
        sol.push(sum % 10);
        carry = Math.floor(sum / 10); 
    }

    if (carry > 0) {
        sol.push(carry);
    }

    return sol;

};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))