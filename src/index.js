import './style.css';
import Render from './render';

const search = document.getElementById('searchButton');
const input = document.getElementById('locationInput');

const tempUnit = document.getElementById('tempUnit');
const tempC = document.querySelectorAll('.tempC');
const tempF = document.querySelectorAll('.tempF');

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
    input.value = "";
})

tempUnit.addEventListener('change', () => {
    document.querySelectorAll('.hide').forEach((element) => {
        element.classList.remove('hide');
    })

    if (tempUnit.value === "fahrenheit") {
        tempC.forEach((element) => {
            element.classList.add('hide');
        })
    } if (tempUnit.value === "celsius") {
        tempF.forEach((element) => {
            element.classList.add('hide');
        })
    }
})

const currentWeather = getWeather("london");

console.log(currentWeather);


