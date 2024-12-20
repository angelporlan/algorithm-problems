// El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

// Cada archivo sigue este formato:

// Comienza con un número (puede contener cualquier cantidad de dígitos).
// Luego tiene un guion bajo _.
// Continúa con un nombre de archivo y su extensión.
// Finaliza con una extensión extra al final (que no necesitamos).
// Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

// Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

function decodeFilename(filename) {
    const start = filename.indexOf('_') + 1; 
    const end = filename.lastIndexOf('.'); 
    return filename.slice(start, end);
}

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))