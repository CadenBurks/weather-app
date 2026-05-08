import './style.css'
import { getReport, transformData } from './api';
import { toggleMode, renderCurrentWeather } from './ui';

const mode = document.querySelector(".mode-toggle");
const btn = document.querySelector(".search-btn");
const locationForm = document.querySelector("#location-form");

mode.addEventListener("click", toggleMode);

locationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = document.querySelector("#location").value;
  let data = await getReport(location);
  let transformedData = transformData(data);
  renderCurrentWeather(transformedData);
});