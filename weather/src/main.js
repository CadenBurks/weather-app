import './style.css'

const mode = document.querySelector(".mode-toggle");
const body = document.querySelector("body");
const appTitle = document.querySelector(".app-title");
const currForecast = document.querySelector(".current-forecast");
console.log("Hello");

mode.addEventListener("click", (event) => {
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
});