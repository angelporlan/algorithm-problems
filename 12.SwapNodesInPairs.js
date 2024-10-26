// Función que intercambia pares de nodos adyacentes en una lista enlazada.

// Function that swaps pairs of adjacent nodes in a linked list.

const swapPairs = function(head) {
    const array = [];
    while (head !== null) {
        array.push(head.val);
        head = head.next;
    }

    const swappedArray = [];
    for (let i = 0; i < array.length; i += 2) {
        if (array[i + 1] !== undefined) swappedArray.push(array[i + 1]);
        swappedArray.push(array[i]);
    }

    let dummyNode = new ListNode(0);
    let currentNode = dummyNode;
    for (let val of swappedArray) {
        currentNode.next = new ListNode(val);
        currentNode = currentNode.next;
    }

    return dummyNode.next;
};

console.log(swapPairs([3, 1, 6, 2]))