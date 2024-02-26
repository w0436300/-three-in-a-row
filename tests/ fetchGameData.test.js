// fetchGameData.test.js
import { fetchGameData } from '../src/fetchGameData.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rows: [[{ currentState: 0 }]] }),
  })
);

test('fetchGameData fetches data correctly', async () => {
  const data = await fetchGameData();
  expect(data.rows.length).toBeGreaterThan(0);
  expect(global.fetch).toHaveBeenCalledWith('https://prog2700.onrender.com/threeinarow/random');
});
