// import { data } from '../data.js';
import {
  createElementEnhanced,
  createDiv,
} from '../../utilities/create-element-enhanced.js';

function createDayContainers(dailyForecastData) {
  const dailyDataContainer = createElementEnhanced('div');
  dailyDataContainer.identify('id', 'daily-data-container');

  for (const [headingText, data] of Object.entries(dailyForecastData)) {
    const iconSource = data.iconSource;

    const headingElement = createElementEnhanced('h3');
    headingElement.textContent = headingText;

    const iconElement = createElementEnhanced('img');
    iconElement.src = iconSource;

    const dataTextContents = {
      average: data.averageTemperature,
      high: data.highTemperature,
      low: data.lowTemperature,
    };

    const dataDivContainer = createDiv();
    dataDivContainer.identify('class', 'day-information-container');
    for (const [label, value] of Object.entries(dataTextContents)) {
      const labelElement = createElementEnhanced('label');
      labelElement.identify('class', 'data-label');
      labelElement.textContent = `${label}:`;

      const valueSpan = createElementEnhanced('span');
      valueSpan.identify('class', ['forecast-data']);
      valueSpan.setAttribute('data-type', 'temperature');
      valueSpan.textContent = value;

      const dataDiv = createDiv();
      dataDiv.append(labelElement, valueSpan);

      dataDivContainer.appendChild(dataDiv);
    }

    const dayDataContainer = createDiv();
    dayDataContainer.identify('class', 'day-data-container');

    dayDataContainer.append(iconElement, dataDivContainer);

    const dayContainer = createDiv();
    dayContainer.identify('class', 'day-container');
    dayContainer.append(headingElement, dayDataContainer);

    dailyDataContainer.appendChild(dayContainer);
  }

  return dailyDataContainer;
}

export function createDailyForecastContainer(data) {
  const dailyForecastData = data.weatherForecastDaily;

  const dayContainers = createDayContainers(dailyForecastData);

  const dailyForecastHeading = createElementEnhanced('h2');
  dailyForecastHeading.identify('id', 'daily-forecast-heading');
  dailyForecastHeading.classList.add('section-heading');
  dailyForecastHeading.textContent = 'Daily Forecast';

  const dailyForecastContainer = createElementEnhanced('section');
  dailyForecastContainer.identify('id', 'daily-forecast-container');
  dailyForecastContainer.append(
    dailyForecastHeading,
    dayContainers
  );

  return dailyForecastContainer;
}
