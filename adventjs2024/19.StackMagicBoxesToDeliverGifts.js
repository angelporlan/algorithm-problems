// ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

// Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso
// Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

// Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };
  
  function distributeWeight(weight) {
    const boxes = [10, 5, 2, 1];
    let result = [];
    let maxWidth = 0;
  
    for (let box of boxes) {
      while (weight >= box) {
        weight -= box;
        let boxLines = [...boxRepresentations[box]];
        maxWidth = Math.max(maxWidth, boxLines[0].length);
        result.push(boxLines);
      }
    }
  
    let stacked = [];
    result.forEach((box) => {
      box.forEach((line, i) => {
        stacked[i] = (stacked[i] || '').padEnd(maxWidth, ' ') + line.trim();
      });
    });
  
    return stacked.join('\n');
  }
  
console.log(distributeWeight(13))
// Devuelve:
//  _
// |_|

// distributeWeight(2)
// // Devuelve:
// //  ___
// // |___|

// distributeWeight(3)
// // Devuelve:
// //  _
// // |_|_
// // |___|

// distributeWeight(4)
// // Devuelve:
// //  ___
// // |___|
// // |___|

// distributeWeight(5)
// // Devuelve:
// //  _____
// // |     |
// // |_____|

// distributeWeight(6)
// // Devuelve:
// //  _
// // |_|___
// // |     |
// // |_____|