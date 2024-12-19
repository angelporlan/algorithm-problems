// Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

// Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

// MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
// INC x: Incrementa en 1 el contenido del registro x
// DEC x: Decrementa en 1 el contenido del registro x
// JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
// Comportamiento esperado:
// Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
// El salto con JMP es absoluto y lleva al índice exacto indicado por y.
// Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

function compile(instructions) {
    const registers = {}; 
    let pointer = 0; 

    while (pointer < instructions.length) {
        const [cmd, x, y] = instructions[pointer].split(' ');

        switch (cmd) {
            case 'MOV':
                registers[y] = isNaN(x) ? (registers[x] || 0) : parseInt(x);
                break;
            case 'INC':
                registers[x] = (registers[x] || 0) + 1;
                break;
            case 'DEC':
                registers[x] = (registers[x] || 0) - 1;
                break;
            case 'JMP':
                if ((registers[x] || 0) === 0) {
                    pointer = parseInt(y);
                    continue; 
                }
                break;
        }
        pointer++; 
    }

    return registers['A'];
}

const instructions = [
    'MOV -1 C', 
    'INC C',    
    'JMP C 1', 
    'MOV C A',  
    'INC A'    
];

console.log(compile(instructions)); // ➞ 2
