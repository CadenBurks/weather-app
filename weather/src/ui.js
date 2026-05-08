const mode = document.querySelector(".mode-toggle");
const body = document.querySelector("body");
const appTitle = document.querySelector(".app-title");
const currForecast = document.querySelector(".current-forecast");

const mainLoc = document.querySelector(".main-location");
const subLoc = document.querySelector(".sub-location");
const currentTemp = document.querySelector(".current-temp");
const high = document.querySelector(".high-temp");
const low = document.querySelector(".low-temp");
const condition = document.querySelector(".condition");
const precip = document.querySelector(".precip");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");

let weatherData = null;

function toggleMode() {
    if (mode.src.includes("sun")) {
    mode.src = "moon.svg";
    mode.classList.add("dark");
    mode.alt = "Moon";
    
    body.classList.add("dark");
    appTitle.classList.add("dark");
    currForecast.classList.add("dark");
  }
  else {
    mode.src = "sun.svg";
    mode.classList.remove("dark");
    mode.alt = "Sun";
    
    body.classList.remove("dark");
    appTitle.classList.remove("dark");
    currForecast.classList.remove("dark");
  }
}

function convertTemp(temp, unit) {
  if (unit === "C") return Math.round((temp - 32) * 5/9);
  return Math.round(temp);
}

function renderCurrentWeather(data) {
    if (data) weatherData = data;
    if (!weatherData) return;
    const unit = document.querySelector('input[name="degree"]:checked').value;

    const locationData = weatherData.location.split(",");
    mainLoc.textContent = locationData[0];
    subLoc.textContent = locationData.slice(1).join(",");

    currentTemp.textContent = `${convertTemp(weatherData.current.temp, unit)}°${unit}`;
    high.textContent = `H: ${convertTemp(weatherData.current.high, unit)}°`;
    low.textContent = `L: ${convertTemp(weatherData.current.low, unit)}°`;

    condition.textContent = weatherData.current.conditions;
    precip.textContent = weatherData.current.preciptype[0] ? `${weatherData.current.precipprob}% chance of ${weatherData.current.preciptype}` : `${weatherData.current.precipprob}%`;
    humidity.textContent = "Humidity Level: " + weatherData.current.humidity;
    windspeed.textContent = `${weatherData.current.wind} mph`;
}

document.querySelectorAll('input[name="degree"]').forEach(radio => {
  radio.addEventListener("change", () => renderCurrentWeather());
});

export { toggleMode, renderCurrentWeather };