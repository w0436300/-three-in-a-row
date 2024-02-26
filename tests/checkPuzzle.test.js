import { checkPuzzle } from '../src/checkPuzzle.js';

const rows = [
  [{ currentState: 1, correctState: 1 }, { currentState: 2, correctState: 2 }],
  [{ currentState: 3, correctState: 3 }, { currentState: 1, correctState: 1 }]
];
const gridSize = 2;

test('checkPuzzle verifies puzzle correctly', () => {
const result = checkPuzzle(rows, gridSize);
expect(result).toEqual({ allCorrect: true, incomplete: false }); 
});