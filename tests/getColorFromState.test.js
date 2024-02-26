import { getColorFromState } from '../src/getColorFromState.js'

test('getColorFromState returns correct color for each state', () => {
  expect(getColorFromState(0)).toBe('#e47298');
  expect(getColorFromState(1)).toBe('#209e31');
  expect(getColorFromState(2)).toBe('white');
  expect(getColorFromState(999)).toBe('#e47298'); 
});