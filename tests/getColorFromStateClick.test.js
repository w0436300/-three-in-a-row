import { getColorFromState } from '../src/getColorFromState.js';

// Mocking the document object
const mockDocument = {
  createElement: jest.fn(() => ({
    style: {},
  })),
};

test('Square color changes correctly after user clicks', () => {
  // Set up
  const squareState = {
    currentState: 0,
  };

  // Act
  const color = getColorFromState(squareState.currentState);

  // Assert
  expect(color).toBe('#e47298'); 
});
