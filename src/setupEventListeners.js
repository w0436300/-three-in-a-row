export function setupEventListeners({
    toggleSquareState,
    checkPuzzle,
    toggleIncorrectSquares,
    gameTimer
}) {
    // click event
    document.querySelectorAll('td').forEach(td => {
        td.addEventListener('click', function() {
            toggleSquareState(this);
        });
    });

    // checkPuzzleButton
    document.getElementById('checkPuzzleButton').addEventListener('click', checkPuzzle);

    // showIncorrect
    document.getElementById('showIncorrect').addEventListener('change', function() {
        toggleIncorrectSquares(this.checked);
    });

    // timer
    document.getElementById('start').addEventListener('click', () => gameTimer.start());
    document.getElementById('stop').addEventListener('click', () => gameTimer.stop());
}
