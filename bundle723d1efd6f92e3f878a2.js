/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Render)
/* harmony export */ });
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
class Render {
  constructor(data) {
    this.data = data;
    this.location = this.renderLocation();
    this.time = this.renderTime();
    this.temp = this.renderTemp();
    this.condition = this.renderCondition();
    this.humidity = this.renderHumidity();
    this.wind = this.renderWind();
    this.time = new Date(data.location.localtime).toLocaleTimeString('en-UK', {
      hour: '2-digit'
    });
    this.background = this.renderBackground();
    this.renderWeather();
  }
  renderLocation() {
    location.textContent = this.data.location.name;
  }
  renderTime() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    time.textContent = new Date(this.data.location.localtime).toLocaleTimeString('en-UK', {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
    currentDate.textContent = new Date(this.data.location.localtime).toLocaleString('en-UK', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
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
    }
    if (weather.includes("drizzle") || weather.includes("rain")) {
      weatherGif.style.backgroundImage = "var(--rain)";
    }
    if (weather.includes("snow") || weather.includes("sleet")) {
      weatherGif.style.backgroundImage = "var(--snow)";
    } else if (weather.includes("clear") || weather.includes("sunny")) {
      weatherGif.style.backgroundImage = "";
    }
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/rain.gif */ "./src/rain.gif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/clouds.png */ "./src/clouds.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/snow.gif */ "./src/snow.gif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/search.svg */ "./src/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/humidity.svg */ "./src/humidity.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/wind.svg */ "./src/wind.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rubik {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

* {
  color: #ffffffde;
}

:root {
  --font-color: #4e4e4e;
  --box-color: #ffffff2a;
  --input-color: #ffffffbe;
  --border-radius: 20px;
  --box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  --midday: linear-gradient(#6bcfff, #4bc5ff, #33beff, #27b9ff, #00adff);
  --midnight: linear-gradient(#282442, #1d1936, #131122, #0a0913, #000000);
  --sunset: linear-gradient(#01084f, #391954, #631e50, #a73c5a, #ff7954);
  --sunrise: linear-gradient(#b5d6e0, #c7e1e5, #ffef7a, #f7c16a, #f46a55);
  --rain: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --clouds: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --snow: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

body {
  margin: 0;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  background-image: var(--sunset);
}

#weatherGif {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
}

.container {
  height: 70vh;
  width: max(55vw, 800px);
  background-color: var(--box-color);
  display: flex;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.left {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 4fr 3fr 3fr 4fr;
  margin: 20px;
  margin-right: 10px;
  background-color: var(--box-color);
  border-radius: var(--border-radius);
  text-align: center;
  align-items: stretch;
  box-shadow: var(--box-shadow);
}

#search {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0 15px;
}

#locationInput {
  height: 25px;
  border-radius: 15px;
  width: 200px;
  border: none;
  padding-left: 10px;
  margin-right: -25px;
  color: var(--font-color);
  background-color: var(--input-color);
}

#searchButton {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  background-size: contain;
  height: 20px;
  width: 20px;
  display: inline-block;
  position: relative;
  top: 5px;
  right: 5px;
}

#search > select {
  height: 25px;
  border-radius: 15px;
  margin-right: 5px;
  border: none;
  padding-left: 10px;
  width: 110px;
  color: var(--font-color);
  background-color: var(--input-color);
}

#search > select > option {
  color: var(--font-color);
}

#leftUpper {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  display: flex;
  flex-flow: column;
  justify-content: center;
  border-bottom: solid 1px #929292;
  margin: 0 20px 0 20px;
}

#leftUpper > * {
  margin: 0;
}

#location {
  font-size: 2.5em;
  font-weight: 400;
}

#time,
#date {
  font-weight: 300;
}

#currentTempC,
#currentTempF {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  align-self: flex-end;
  font-size: 2.5em;
  margin-left: 20px;
}

.weatherIcon {
  grid-row: 3 / 5;
  grid-column: 2 / 3;
  width: 250px;
  height: 250px;
  justify-self: center;
  align-self: center;
}

#condition {
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  font-size: 1.2em;
  font-weight: 300;
  margin-left: 20px;
}

.humidIcon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center;
  background-size: contain;
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

#bottom > div:first-child {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

.windIcon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-position: center;
  background-size: contain;
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

#bottom > div:last-child {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

#bottom {
  grid-row: 5 / 6;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: solid 1px #929292;
  margin: 0 20px 0 20px;
  align-items: center;
}

.right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 20px;
  margin-left: 10px;
  gap: 20px;
  font-size: 1.2em;
}

.today,
.tomorrow,
.dayAfter {
  box-shadow: var(--box-shadow);
  padding: 10px;
}

.today > div,
.tomorrow > div,
.dayAfter > div {
  font-weight: 300;
}

.today > div:first-child,
.tomorrow > div:first-child,
.dayAfter > div:first-child {
  font-weight: 400;
}

.today > div:nth-child(2),
.today > div:nth-child(3),
.tomorrow > div:nth-child(2),
.tomorrow > div:nth-child(3),
.dayAfter > div:nth-child(2),
.dayAfter > div:nth-child(3) {
  font-weight: 400;
}

.right > div {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--box-color);
  text-align: center;
  align-items: center;
  border-radius: var(--border-radius);
}
.right > div > div:first-child {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}
.right > div > #tempC,
.right > div > #tempF {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}
.six {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.twelve {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.eighteen {
  grid-row: 2 / 3;
  grid-column: 3 / 4;
}
.six,
.twelve,
.eighteen {
  justify-self: center;
  align-self: center;
  height: 70px;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".rubik {\n  font-family: \"Rubik\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 500;\n  font-style: normal;\n}\n\n* {\n  color: #ffffffde;\n}\n\n:root {\n  --font-color: #4e4e4e;\n  --box-color: #ffffff2a;\n  --input-color: #ffffffbe;\n  --border-radius: 20px;\n  --box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n  --midday: linear-gradient(#6bcfff, #4bc5ff, #33beff, #27b9ff, #00adff);\n  --midnight: linear-gradient(#282442, #1d1936, #131122, #0a0913, #000000);\n  --sunset: linear-gradient(#01084f, #391954, #631e50, #a73c5a, #ff7954);\n  --sunrise: linear-gradient(#b5d6e0, #c7e1e5, #ffef7a, #f7c16a, #f46a55);\n  --rain: url(../src/rain.gif);\n  --clouds: url(../src/clouds.png);\n  --snow: url(../src/snow.gif);\n}\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Rubik\", sans-serif;\n  background-image: var(--sunset);\n}\n\n#weatherGif {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: contain;\n}\n\n.container {\n  height: 70vh;\n  width: max(55vw, 800px);\n  background-color: var(--box-color);\n  display: flex;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n}\n\n.left {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr 4fr 3fr 3fr 4fr;\n  margin: 20px;\n  margin-right: 10px;\n  background-color: var(--box-color);\n  border-radius: var(--border-radius);\n  text-align: center;\n  align-items: stretch;\n  box-shadow: var(--box-shadow);\n}\n\n#search {\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 10px 0 15px;\n}\n\n#locationInput {\n  height: 25px;\n  border-radius: 15px;\n  width: 200px;\n  border: none;\n  padding-left: 10px;\n  margin-right: -25px;\n  color: var(--font-color);\n  background-color: var(--input-color);\n}\n\n#searchButton {\n  background-image: url(../src/search.svg);\n  background-position: center;\n  background-size: contain;\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n  right: 5px;\n}\n\n#search > select {\n  height: 25px;\n  border-radius: 15px;\n  margin-right: 5px;\n  border: none;\n  padding-left: 10px;\n  width: 110px;\n  color: var(--font-color);\n  background-color: var(--input-color);\n}\n\n#search > select > option {\n  color: var(--font-color);\n}\n\n#leftUpper {\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  border-bottom: solid 1px #929292;\n  margin: 0 20px 0 20px;\n}\n\n#leftUpper > * {\n  margin: 0;\n}\n\n#location {\n  font-size: 2.5em;\n  font-weight: 400;\n}\n\n#time,\n#date {\n  font-weight: 300;\n}\n\n#currentTempC,\n#currentTempF {\n  grid-row: 3 / 4;\n  grid-column: 1 / 2;\n  align-self: flex-end;\n  font-size: 2.5em;\n  margin-left: 20px;\n}\n\n.weatherIcon {\n  grid-row: 3 / 5;\n  grid-column: 2 / 3;\n  width: 250px;\n  height: 250px;\n  justify-self: center;\n  align-self: center;\n}\n\n#condition {\n  grid-row: 4 / 5;\n  grid-column: 1 / 2;\n  font-size: 1.2em;\n  font-weight: 300;\n  margin-left: 20px;\n}\n\n.humidIcon {\n  background-image: url(../src/humidity.svg);\n  background-position: center;\n  background-size: contain;\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n\n#bottom > div:first-child {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.windIcon {\n  background-image: url(../src/wind.svg);\n  background-position: center;\n  background-size: contain;\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n\n#bottom > div:last-child {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n}\n\n#bottom {\n  grid-row: 5 / 6;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border-top: solid 1px #929292;\n  margin: 0 20px 0 20px;\n  align-items: center;\n}\n\n.right {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  margin: 20px;\n  margin-left: 10px;\n  gap: 20px;\n  font-size: 1.2em;\n}\n\n.today,\n.tomorrow,\n.dayAfter {\n  box-shadow: var(--box-shadow);\n  padding: 10px;\n}\n\n.today > div,\n.tomorrow > div,\n.dayAfter > div {\n  font-weight: 300;\n}\n\n.today > div:first-child,\n.tomorrow > div:first-child,\n.dayAfter > div:first-child {\n  font-weight: 400;\n}\n\n.today > div:nth-child(2),\n.today > div:nth-child(3),\n.tomorrow > div:nth-child(2),\n.tomorrow > div:nth-child(3),\n.dayAfter > div:nth-child(2),\n.dayAfter > div:nth-child(3) {\n  font-weight: 400;\n}\n\n.right > div {\n  display: grid;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: var(--box-color);\n  text-align: center;\n  align-items: center;\n  border-radius: var(--border-radius);\n}\n.right > div > div:first-child {\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n}\n.right > div > #tempC,\n.right > div > #tempF {\n  grid-row: 1 / 2;\n  grid-column: 3 / 4;\n}\n.six {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n}\n.twelve {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n}\n.eighteen {\n  grid-row: 2 / 3;\n  grid-column: 3 / 4;\n}\n.six,\n.twelve,\n.eighteen {\n  justify-self: center;\n  align-self: center;\n  height: 70px;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clouds.png":
/*!************************!*\
  !*** ./src/clouds.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe106e02d1e8cccf3ad.png";

/***/ }),

/***/ "./src/humidity.svg":
/*!**************************!*\
  !*** ./src/humidity.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5f331d09a9b351d0187.svg";

/***/ }),

/***/ "./src/rain.gif":
/*!**********************!*\
  !*** ./src/rain.gif ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e27a63c376e8852b20dc.gif";

/***/ }),

/***/ "./src/search.svg":
/*!************************!*\
  !*** ./src/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8276ee6ebc65298ee152.svg";

/***/ }),

/***/ "./src/snow.gif":
/*!**********************!*\
  !*** ./src/snow.gif ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7495c3687ba4c810895d.gif";

/***/ }),

/***/ "./src/wind.svg":
/*!**********************!*\
  !*** ./src/wind.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2056061b689005f26d51.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");


const search = document.getElementById('searchButton');
const input = document.getElementById('locationInput');
const tempUnit = document.getElementById('tempUnit');
const tempC = document.querySelectorAll('.tempC');
const tempF = document.querySelectorAll('.tempF');
async function getWeather(value) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ce8d2d0471f84fe585d221017241804&q=${value}&days=3&aqi=no&alerts=no`, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    const current = new _render__WEBPACK_IMPORTED_MODULE_1__["default"](weatherData);
    console.log(current.data.current.condition.text);
    return current;
  } catch (error) {
    return console.log("ERROR");
  }
}
search.addEventListener('click', () => {
  getWeather(input.value);
  input.value = "";
});
tempUnit.addEventListener('change', () => {
  document.querySelectorAll('.hide').forEach(element => {
    element.classList.remove('hide');
  });
  if (tempUnit.value === "fahrenheit") {
    tempC.forEach(element => {
      element.classList.add('hide');
    });
  }
  if (tempUnit.value === "celsius") {
    tempF.forEach(element => {
      element.classList.add('hide');
    });
  }
});
const currentWeather = getWeather("london");
})();

/******/ })()
;
//# sourceMappingURL=bundle723d1efd6f92e3f878a2.js.map