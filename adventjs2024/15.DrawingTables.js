// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe representar los datos del objeto de la siguiente manera:

// Tiene una cabecera con el nombre de la columna.
// El nombre de la columna pone la primera letra en mayúscula.
// Cada fila debe contener los valores de los objetos en el orden correspondiente.
// Cada valor debe estar alineado a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.

function drawTable(data) {
    let maxKeyLength = 0;
    let maxItemLength = {};
    
    data.forEach(item => {
        Object.keys(item).forEach(key => {
            if (key.length > maxKeyLength) maxKeyLength = key.length;
            if (!maxItemLength[key]) maxItemLength[key] = key.length;
            if (item[key].toString().length > maxItemLength[key]) maxItemLength[key] = item[key].toString().length;
        });
    });
    
    let table = '';
    
    table += '+';
    Object.keys(data[0]).forEach(key => {
        table += '-'.repeat(maxItemLength[key] + 2) + '+';
    });
    table += '\n|';
    Object.keys(data[0]).forEach(key => {
        table += ' ' + key.charAt(0).toUpperCase() + key.slice(1) + ' '.repeat(maxItemLength[key] - key.length + 1) + '|';
    });
    table += '\n+';
    Object.keys(data[0]).forEach(key => {
        table += '-'.repeat(maxItemLength[key] + 2) + '+';
    });
    table += '\n';
    
    data.forEach(item => {
        table += '|';
        Object.keys(item).forEach(key => {
            table += ' ' + item[key] + ' '.repeat(maxItemLength[key] - item[key].toString().length + 1) + '|';
        });
        table += '\n';
    });
    
    table += '+';
    Object.keys(data[0]).forEach(key => {
        table += '-'.repeat(maxItemLength[key] + 2) + '+';
    });
    
    return table;
}

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]));
console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ]))

// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+