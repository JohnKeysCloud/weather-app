// import { data } from '../data.js';
import { createElementEnhanced,createDiv } from '../../utilities/create-element-enhanced.js';

// > --------------------------------------------------------------

function createHourContainers(hourlyForecastData) {
  const hourlyDataContainer = createElementEnhanced('div');
  hourlyDataContainer.identify('id', 'hourly-data-container');

  for (const { hour, iconSource, temperature } of Object.values(hourlyForecastData)) {
    // ? Error Handling:
    // if (iconSource && time && temperature) {
    // console.log(iconSource, time, temperature);
    // Check if all properties exist
    // } else {
    // console.log(`Missing data for key ${key}`);
    // }

    const headingElement = createElementEnhanced('h3');
    headingElement.textContent = hour;

    const iconElement = createElementEnhanced('img');
    iconElement.src = iconSource;

    const temperatureElement = createDiv(temperature);
    temperatureElement.setAttribute('data-type', 'temperature');

    const dataDiv = createDiv();
    dataDiv.identify('class', 'hour-container');

    dataDiv.append(
      headingElement,
      iconElement,
      temperatureElement
    );

    hourlyDataContainer.appendChild(dataDiv);
  }

  return hourlyDataContainer;
}

export function createHourlyForecastContainer(data) {
  const hourlyForecastData = data.weatherForecastHourly;

  const hourlyForecastHeading = createElementEnhanced('h2');
  hourlyForecastHeading.identify('id', 'hourly-forecast-heading');
  hourlyForecastHeading.classList.add('section-heading');
  hourlyForecastHeading.textContent = 'Hourly Forecast';

  const hourlyContainers = createHourContainers(hourlyForecastData);

  const hourlyForecastContainer = createElementEnhanced('section');
  hourlyForecastContainer.identify('id', 'hourly-forecast-container');
  hourlyForecastContainer.append(
    hourlyForecastHeading,
    hourlyContainers
  );

  return hourlyForecastContainer;
}
