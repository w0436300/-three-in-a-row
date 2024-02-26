export function toggleIncorrectSquares(rows, gridSize, show) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = rows[i][j];
            const index = i * gridSize + j;
            const td = document.querySelector(`td[square-index="${index}"]`);
            
            if (show && square.currentState !== square.correctState) {
                td.textContent = 'X';
            } else {
                td.textContent = '';
            }
        }
    }
}

