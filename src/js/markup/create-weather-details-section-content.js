// import { data } from '../data.js';
import { createElementEnhanced, createDiv } from '../../utilities/create-element-enhanced.js';
import { convertCamelCaseToTextContent } from '../../utilities/convert-camel-case-to-text-content.js';

// > --------------------------------------------------------------


function setIconSource(key) {
  const iconMap = {
    feelsLike: ['fa-solid', 'fa-thermometer'],
    humidity: ['fa-solid', 'fa-water'],
    chanceOfRain: ['fa-solid', 'fa-droplet'],
    windSpeed: ['fa-solid', 'fa-wind'],
  };

  return iconMap[key] || console.error('Invalid key');
}

export function createWeatherDetailsSectionContent(data) {
  const weatherDetailsFragment = document.createDocumentFragment();

  for (const [key, value] of Object.entries(data.weatherDetails)) {
    const dataElement = createDiv(value);

    if (key === 'feelsLike') {
      dataElement.setAttribute('data-type', 'temperature');
    }

    const label = createElementEnhanced('label');
    label.textContent = `${ convertCamelCaseToTextContent(key) }:`;
    
    const icon = createElementEnhanced('img');
    icon.identify('class', 'weather-details-icon');
    icon.classList.add(...setIconSource(key), 'label-icon'); 

    const labelContainer = createDiv();
    labelContainer.identify('class', 'label-container');
    labelContainer.append(
      icon,
      label
    );

    const weatherDetailsDiv = createDiv();
    weatherDetailsDiv.identify('class', `weather-detail-${key}-container`);
    weatherDetailsDiv.setAttribute('data-type', key);

    weatherDetailsDiv.append(labelContainer, dataElement);
    
    weatherDetailsFragment.appendChild(weatherDetailsDiv);
  }

  return weatherDetailsFragment;
}
