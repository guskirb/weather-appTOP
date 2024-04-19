import './style.css';
import Render from './render';

const search = document.getElementById('searchButton');
const input = document.getElementById('locationInput');


async function getWeather(value) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ce8d2d0471f84fe585d221017241804&q=${value}&days=3&aqi=no&alerts=no`, { mode: 'cors' })

        const weatherData = await response.json();
        const current = new Render(weatherData);
        return current;

    } catch (error) {
        return console.log("ERROR");
    }
}

search.addEventListener('click', () => {
    getWeather(input.value);
});

const currentWeather = getWeather("london");

console.log(currentWeather);


