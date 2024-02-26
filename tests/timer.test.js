import { Timer } from '../src/timer.js';

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');

test('Timer starts and counts correctly', () => {

  const displayElement = { textContent: '' };

  const timer = new Timer(displayElement);
  
  timer.start();
  
  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  jest.advanceTimersByTime(3000); 
  
  expect(timer.getCount()).toBe(3);
});
