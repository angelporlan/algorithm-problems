//funcion que compruba si un sudoku es válido

//function that checks if a sudoku is valid

const isValidSudoku = function(board) {
    let boxes = Array.from({ length: 9 }, () => []);

    for (let i = 0; i < board.length; i++) {
        let numbersX = [];
        let numbersY = [];
        for (let j = 0; j < board[i].length; j++) {
            // Compruebo las filas
            if (numbersX.indexOf(board[i][j]) !== -1) return false;
            if (board[i][j] !== '.') numbersX.push(board[i][j]);
        
            // Compruebo las columnas
            if (numbersY.indexOf(board[j][i]) !== -1) return false;
            if (board[j][i] !== '.') numbersY.push(board[j][i]);

            // Determino el índice de la casilla 3x3
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            // Compruebo la casilla correspondiente
            if (boxes[boxIndex].indexOf(board[i][j]) !== -1) return false;
            if (board[i][j] !== '.') boxes[boxIndex].push(board[i][j]);
        }
    }

    return true;
};

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
));
