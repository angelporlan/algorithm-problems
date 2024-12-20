// En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

// La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

// El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

// En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

// Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

// Importante: Las dos cadenas siempre tendrán la misma longitud.

// La salida es una cadena de texto que representa el resultado final de la batalla.

// Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
// Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
// Si hay un empate y ninguno queda con poder al final, devuelve "x".


function battleHorde(zombies, humans) {
    let zombiePower = zombies.split('').map(Number);
    let humanPower = humans.split('').map(Number);

    let currentZombie = 0;
    let currentHuman = 0;

    for (let i = 0; i < zombiePower.length; i++) {
        currentZombie += zombiePower[i];
        currentHuman += humanPower[i];

        if (currentZombie > currentHuman) {
            currentZombie -= currentHuman; 
            currentHuman = 0;
        } else if (currentHuman > currentZombie) {
            currentHuman -= currentZombie; 
            currentZombie = 0;
        } else {
            currentZombie = 0;
            currentHuman = 0;
        }
    }

    if (currentZombie > 0) {
        return `${currentZombie}z`;
    } else if (currentHuman > 0) {
        return `${currentHuman}h`;
    } else {
        return "x";
    }
}


const zombies = '242';
const humans = '334';
console.log(battleHorde(zombies, humans));