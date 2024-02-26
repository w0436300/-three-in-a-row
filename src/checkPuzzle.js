   //Check puzzle function
   export function checkPuzzle(rows, gridSize) {
    let allCorrect = true;
    let incomplete = false;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = rows[i][j];
            if (square.currentState === 0) {
                incomplete = true;
            } else if (square.currentState !== square.correctState) {
                allCorrect = false;
            }
        }
    }
    
    return { allCorrect, incomplete };

}



