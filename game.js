import { getColorFromState } from './src/getColorFromState.js';
import { checkPuzzle } from './src/checkPuzzle.js';

async function Game(){
    // fetch game data from API
    const respond = await fetch('https://prog2700.onrender.com/threeinarow/random');
    const gameJSON = await respond.json();
    const rows = gameJSON.rows
    const gridSize = rows.length;

   //Displaying a  6 x 6 grid table
    let gridHTML = "<table>";
    for (let i = 0; i < gridSize; i++) {
        gridHTML += "<tr>";
        for (let j = 0; j < gridSize; j++) {
            const index = i * gridSize + j;
            const square = rows[i][j]; 
            const color = getColorFromState(square.currentState); 
            gridHTML += `<td style="background: ${color};" square-index="${index}"></td>`;
        }
        gridHTML += "</tr>";
    }
    gridHTML += "</table>";

    gridHTML += `<div style="margin-top: 10px;"><button id="refreshGameButton">Random 6*6  12*12  18*18</button></div>`;
    gridHTML += `<button id="checkPuzzleButton">Check Puzzle</button>`
    gridHTML += `<div id="puzzleStatus"></div>`;
    gridHTML += `<input type="checkbox" id="showIncorrect" /> Show Incorrect Squares<br>`;
    gridHTML += `
    <p id="demo">0</p>
    <button id="start" onclick="myStartFunction()">Start time</button>
    <button id="stop" onclick="myStopFunction()">Stop time</button>
    
`

    document.getElementById('theGame').innerHTML = gridHTML;
    
    // Select all 'td' elements and assign them to the variable 'tds'
    let tds = document.querySelectorAll('td');
    tds.forEach(td => {
        //
        td.addEventListener ('click', function() {
            //retrieve the index of the clicked square
            // 'this' refers to the current square that was clicked
            const index = this.getAttribute('square-index');

            // using the index and the gridSize to determine the position
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            const currentSquare = rows[row][col];

            //check if canToggle is true, color can be changed
            if(currentSquare.canToggle){
                // update the background color of current square baseed on the new state
                currentSquare.currentState = (currentSquare.currentState + 1) % 3;
                this.style.background = getColorFromState(currentSquare.currentState) 

            //hide X when its correct
            const showIncorrect = document.getElementById('showIncorrect').checked;
            if (showIncorrect) {
                if (currentSquare.currentState === currentSquare.correctState) {
                    this.textContent = ''; 
                } else {
                    this.textContent = 'X'; 
                }
            }
            }
        })
    })
    
    //Click “Check Puzzle” display: 
    //Check puzzle function
  
    document.getElementById('checkPuzzleButton').addEventListener('click', () => checkPuzzle(rows, gridSize));
    
    // display X on incorrect squares
    function toggleIncorrectSquares(show) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const square = rows[i][j];
                const td = document.querySelector(`td[square-index="${i * gridSize + j}"]`);
                
                if (show && square.currentState !== square.correctState) {
                    
                    td.textContent = 'X';
                } else {
                 
                    td.textContent = '';
                }
            }
        }
    }
    document.getElementById('showIncorrect').addEventListener('click', function() {
        toggleIncorrectSquares(this.checked);
    });

    let count = 0;
    let myInterval;
    function myTimer() {
      document.getElementById("demo").innerHTML = count++; 
    }

    function myStartFunction() {
        if(!myInterval){
        myInterval = setInterval(myTimer, 1000);
        }
      }
    
    function myStopFunction() {
      clearInterval(myInterval);
    }
    document.getElementById('stop').onclick = myStopFunction; 
    document.getElementById('start').onclick = myStartFunction; 

    document.getElementById('refreshGameButton').addEventListener('click', function() {
        window.location.reload();
    });
    
}

Game();
console.log("Start");
