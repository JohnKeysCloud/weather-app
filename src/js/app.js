import '../sass/cyclone-reset.scss';
import '../sass/keyframes.scss';
import '../sass/main.scss';

import cycloneLogo from '../assets/images/cyclone-c.gif';

import { querySelector } from '../utilities/query-selector';
import {
  createElementEnhanced,
  createSection,
} from '../utilities/create-element-enhanced';

import { createWeatherMain } from './markup/create-weather-main';
import { createWeatherInfoSectionContent } from './markup/create-weather-info-section-content';
import { createWeatherDetailsSectionContent } from './markup/create-weather-details-section-content';
import { createWeatherForecastSectionContent } from './markup/create-weather-forecast-section-content';

import { handleUnitButton } from './handlers/handle-unit-button';
import { handleSearchInput } from './handlers/handle-search-input';

import { fetchWeatherData } from './apis/weather-api';

import { getFormattedData } from './get-formatted-data';

import { appState } from './states';

import { displayErrorMessage } from './display-error-message';

import { errorState } from './states';

// > --------------------------------------------------------------

function handleDOM() {
  const unitButton = querySelector('#unit-button');
  unitButton.addEventListener('click', handleUnitButton);

  const searchInput = querySelector('#search-input');
  searchInput.addEventListener('keydown', handleSearchInput);
}

function updateDOM(content, data) {
  content.append(createWeatherMain(), createSection('id', 'forecast'));

  const weatherInfoSectionElement = querySelector('#weather-info');
  weatherInfoSectionElement.appendChild(createWeatherInfoSectionContent(data));

  const cycloneLogoElement = createElementEnhanced('img');
  cycloneLogoElement.identify('id', 'cyclone-logo');
  cycloneLogoElement.src = cycloneLogo;

  const cycloneLogoSectionElement = querySelector('#cyclone-logo-section');
  cycloneLogoSectionElement.appendChild(cycloneLogoElement);
  cycloneLogoSectionElement.identify('class', 'no-select');

  const weatherDetailsSectionElement = querySelector('#weather-details');
  weatherDetailsSectionElement.appendChild(
    createWeatherDetailsSectionContent(data)
  );

  const weatherForecastSectionElement = querySelector('#forecast');
  weatherForecastSectionElement.appendChild(
    createWeatherForecastSectionContent(data)
  );
}

export async function renderDOM(location) {
  try {
    const response = await fetchWeatherData('forecast', location, 3);

    if (typeof response === 'string') {
      errorState.counter.increment();
      
      displayErrorMessage(response);
    } else if (typeof response === 'object') {
      errorState.counter.reset();

      const content = document.getElementById('content');

      if (content.firstChild) {
        while (content.firstChild) {
          content.firstChild.remove();
        }
      }

      const formattedData = getFormattedData(response);

      updateDOM(content, formattedData);
      handleDOM();
    }
  } catch (error) {
    console.error(error);
  }
}

renderDOM(appState.activeLocation);
