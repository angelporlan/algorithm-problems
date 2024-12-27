// El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

// Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

function detectBombs(grid) {

    let result = []
    for (let i = 0; i < grid.length; i++) {
        let fractionResult = []
        for (let j = 0; j < grid[i].length; j++) {
            let counter = 0
            if (i > 0 && j > 0 && grid[i-1][j-1]) counter++
            if (i > 0 && grid[i-1][j]) counter++
            if (i > 0 && j < grid[i].length - 1 && grid[i-1][j+1]) counter++
            if (j > 0 && grid[i][j-1]) counter++
            if (j < grid[i].length - 1 && grid[i][j+1]) counter++
            if (i < grid.length - 1 && j > 0 && grid[i+1][j-1]) counter++
            if (i < grid.length - 1 && grid[i+1][j]) counter++
            if (i < grid.length - 1 && j < grid[i].length - 1 && grid[i+1][j+1]) counter++
            fractionResult.push(counter)
        }     
        result.push(fractionResult)   
    }

    return result
}


console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]))

  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]