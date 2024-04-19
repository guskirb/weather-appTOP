import './style.css';

async function getWeather(value) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ce8d2d0471f84fe585d221017241804&q=${value}&aqi=yes`, { mode: 'cors' })

        const weatherData = await response.json();
        return weatherData;

    } catch (error) {
        return console.log("ERROR");
    }
}

console.log(getWeather('london'));

