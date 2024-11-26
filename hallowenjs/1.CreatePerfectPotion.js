// Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.

// Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo, debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.

function createMagicPotion(potions, target) {
    const seen = new Map(); 

    for (let i = 0; i < potions.length; i++) {
        const complement = target - potions[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(potions[i], i);
    }

    return undefined;
}

console.log(createMagicPotion([1, 2, 3, 4], 5))