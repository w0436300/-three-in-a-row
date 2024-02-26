export async function fetchGameData(url = 'https://prog2700.onrender.com/threeinarow/random') {
    const response = await fetch(url);
    const gameJSON = await response.json();
    return gameJSON;
}
