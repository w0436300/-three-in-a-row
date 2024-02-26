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
    // status message
    let checkPuzzleHTML = '';
    if (allCorrect && !incomplete) {
        checkPuzzleHTML = "You did it!!";
    } else if (!allCorrect) {
        checkPuzzleHTML = "Something is wrong";
    } else {
        checkPuzzleHTML = "So far so good";
    }
    document.getElementById('puzzleStatus').innerHTML = checkPuzzleHTML;
}



