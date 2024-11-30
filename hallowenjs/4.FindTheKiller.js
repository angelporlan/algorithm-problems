// Una persona ha sido asesinada en la noche de Halloween 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro pero es muy debíl y no nos permite identificar quién pudo ser el asesino.

// La información que nos proporciona:

// whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

// suspects: lista de cadenas que representa los nombres de todos los sospechosos.

// Hay que tener que el susurro whisper tiene algunas reglas:

// Cada ~ representa una letra incierta en el susurro.
// Cada posición del susurro es una posición del nombre del asesino.
// La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar de decirlo.
// Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.
// ¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

// Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
// Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
// Si ningún nombre encaja, retorna una cadena vacía ("").
// Las mayúsculas y minúsculas de las letras no importan.

function findTheKiller(whisper, suspects) {
    const originalSuspects = [...suspects];
    whisper = whisper.toLowerCase();
    suspects = suspects.map(name => name.toLowerCase());

    if (whisper[whisper.length - 1] === '$') {
        whisper = whisper.slice(0, -1);
        suspects = suspects.filter(suspect => suspect.length === whisper.length);
    }

    const possibleSuspects = suspects.filter((suspect, index) => {
        for (let i = 0; i < whisper.length; i++) {
            if (whisper[i] !== '~' && whisper[i] !== suspect[i]) return false;
        }
        return true;
    });

    return originalSuspects.filter(name => possibleSuspects.includes(name.toLowerCase())).join(',');
}

const whisper1 = 'd~~~~~a';
const suspects1 = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers', 'Drucala'];
console.log(findTheKiller(whisper1, suspects1)); // -> "Dracula"

const whisper2 = '~r~dd$';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic'];
console.log(findTheKiller(whisper2, suspects2)); // -> ""

const whisper3 = 'd~c~l~';
const suspects3 = ['Dracula', 'Draculo', 'Dracule'];
console.log(findTheKiller(whisper3, suspects3)); // -> "Dracula,Draculo,Dracule"
