// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

function adjustLights(lights) {
    let result1 = 0
    let result2 = 1
    const lights2 = lights.slice()
    const change = {
        '🔴':  '🟢',
        '🟢':  '🔴'
    }

    lights.forEach((element, i) => {
        if (i > 0) {
            if (element === lights[i - 1]) {
                result1++;
                lights[i] = change[lights[i]]
            }
        }
    });

    lights2[0] = change[lights2[0]]

    lights2.forEach((element, i) => {
        if (i > 0) {
            if (element === lights2[i - 1]) {
                result2++;
                lights2[i] = change[lights2[i]]
            }
        }
    });
    return Math.min(result1, result2)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🟢']))
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]))
