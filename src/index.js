import './style.css';
import Render from './render';


async function getWeather(value) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ce8d2d0471f84fe585d221017241804&q=${value}&aqi=yes`, { mode: 'cors' })

        const weatherData = await response.json();
        const current = new Render(weatherData);
        return current;

    } catch (error) {
        return console.log("ERROR");
    }
}

const currentWeather = getWeather("los angeles");

console.log(currentWeather);


