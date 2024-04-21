const location = document.getElementById('location');
const time = document.getElementById('time');
const currentDate = document.getElementById('date');
const tempC = document.getElementById('currentTempC');
const tempF = document.getElementById('currentTempF');
const todayTempC = document.getElementById('todayTempC');
const todayTempF = document.getElementById('todayTempF');
const tomorrowTempC = document.getElementById('tomorrowTempC');
const tomorrowTempF = document.getElementById('tomorrowTempF');
const dayAfterTempC = document.getElementById('dayAfterTempC');
const dayAfterTempF = document.getElementById('dayAfterTempF');
const condition = document.getElementById('condition');
const weatherImg = document.querySelector('.weatherIcon');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const tomorrowDate = document.getElementById('tomorrowDate');
const dayAfterDate = document.getElementById('dayAfterDate');
const six = document.getElementsByClassName('six');
const twelve = document.getElementsByClassName('twelve');
const eighteen = document.getElementsByClassName('eighteen');
const background = document.querySelector('body');
const weatherGif = document.getElementById('weatherGif');

export default class Render {
    constructor(data) {
        this.data = data;
        this.location = this.renderLocation();
        this.time = this.renderTime();
        this.temp = this.renderTemp();
        this.condition = this.renderCondition();
        this.humidity = this.renderHumidity();
        this.wind = this.renderWind();
        this.time = new Date(data.location.localtime)
            .toLocaleTimeString('en-UK', { hour: '2-digit' });
        this.background = this.renderBackground();
        this.renderWeather();
    }

    renderLocation() {
        location.textContent = this.data.location.name;
    }

    renderTime() {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        time.textContent = new Date(this.data.location.localtime)
            .toLocaleTimeString('en-UK', { weekday: 'long', hour: '2-digit', minute: '2-digit' });
        currentDate.textContent = new Date(this.data.location.localtime)
            .toLocaleString('en-UK', { month: 'long', day: 'numeric', year: 'numeric' });
        tomorrowDate.textContent = weekday[new Date(this.data.forecast.forecastday[1].date).getDay()];
        dayAfterDate.textContent = weekday[new Date(this.data.forecast.forecastday[2].date).getDay()];
    }

    renderTemp() {
        tempC.textContent = `${this.data.current.temp_c}°C`;
        tempF.textContent = `${this.data.current.temp_f}°F`;
        todayTempC.textContent = `${this.data.forecast.forecastday[0].day.avgtemp_c}°C`;
        todayTempF.textContent = `${this.data.forecast.forecastday[0].day.avgtemp_f}°F`;
        tomorrowTempC.textContent = `${this.data.forecast.forecastday[1].day.avgtemp_c}°C`;
        tomorrowTempF.textContent = `${this.data.forecast.forecastday[1].day.avgtemp_f}°F`;
        dayAfterTempC.textContent = `${this.data.forecast.forecastday[2].day.avgtemp_c}°C`;
        dayAfterTempF.textContent = `${this.data.forecast.forecastday[2].day.avgtemp_f}°F`;
    }

    renderCondition() {
        condition.textContent = this.data.current.condition.text;
        weatherImg.src = this.data.current.condition.icon;
        six[0].src = this.data.forecast.forecastday[0].hour[6].condition.icon;
        six[1].src = this.data.forecast.forecastday[1].hour[6].condition.icon;
        six[2].src = this.data.forecast.forecastday[2].hour[6].condition.icon;
        twelve[0].src = this.data.forecast.forecastday[0].hour[12].condition.icon;
        twelve[1].src = this.data.forecast.forecastday[1].hour[12].condition.icon;
        twelve[2].src = this.data.forecast.forecastday[2].hour[12].condition.icon;
        eighteen[0].src = this.data.forecast.forecastday[0].hour[18].condition.icon;
        eighteen[1].src = this.data.forecast.forecastday[1].hour[18].condition.icon;
        eighteen[2].src = this.data.forecast.forecastday[2].hour[18].condition.icon;
        this.renderWeather();
    }

    renderHumidity() {
        humidity.textContent = `${this.data.current.humidity}%`;
    }

    renderWind() {
        wind.textContent = `${this.data.current.wind_dir} ${this.data.current.wind_kph}km/h`;
    }

    renderBackground() {
        if (this.time < 4) {
            background.style.backgroundImage = 'var(--midnight)';
        } else if (this.time < 7) {
            background.style.backgroundImage = 'var(--sunrise)';
        } else if (this.time < 17) {
            background.style.backgroundImage = 'var(--midday)';
        } else if (this.time < 19) {
            background.style.backgroundImage = 'var(--sunset)';
        } else {
            background.style.backgroundImage = 'var(--midnight)';
        }
    }

    renderWeather() {
        const weather = this.data.current.condition.text.toLowerCase();
        if (weather.includes("overcast") || weather.includes("cloudy") || weather.includes("mist") || weather.includes("fog")) {
            weatherGif.style.backgroundImage = "var(--clouds)";
        } if (weather.includes("drizzle") || weather.includes("rain")) {
            weatherGif.style.backgroundImage = "var(--rain)";
        } if (weather.includes("snow") || weather.includes("sleet")) {
            weatherGif.style.backgroundImage = "var(--snow)";
        } else if (weather.includes("clear") || weather.includes("sunny")) {
            weatherGif.style.backgroundImage = "";
        }
    }
}