// Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

// Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

// Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

function maxGifts(houses) {
    if (houses.length === 0) return 0; 
    if (houses.length === 1) return houses[0]; 

    let prev1 = 0; 
    let prev2 = 0; 

    for (let house of houses) {
        let temp = prev1;
        prev1 = Math.max(prev1, house + prev2);
        prev2 = temp;
    }

    return prev1;
}

console.log(maxGifts([2, 4, 2]))
console.log(maxGifts([1, 3, 1, 3, 100]))