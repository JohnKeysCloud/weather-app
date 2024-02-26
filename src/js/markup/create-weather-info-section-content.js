// import { data } from '../data.js';
import { createElementEnhanced, createDiv } from '../../utilities/create-element-enhanced.js';
import { unitState } from '../states.js';

// > --------------------------------------------------------------

export function createWeatherInfoSectionContent(data) {
  const weatherInformationFragment = document.createDocumentFragment();

  const weatherIcon = createElementEnhanced('img');
  weatherIcon.identify('class', 'weather-icon');
  weatherIcon.src = data.weatherInfo.iconSource;
  weatherInformationFragment.appendChild(weatherIcon);

  for (const [key, value] of Object.entries(data.weatherInfo)) {
    if (key === 'iconSource') continue;
    
    if (key === 'description') {
      const descriptionHeading = createElementEnhanced('h3');
      descriptionHeading.identify('class', `weather-info-${key}`);
      descriptionHeading.setAttribute('data-type', key);
      descriptionHeading.textContent = value;
      
      weatherInformationFragment.appendChild(descriptionHeading);
      continue;
    }

    const weatherInfoDiv = createDiv(value);
    weatherInfoDiv.identify('class', `weather-info-${key}`);
    weatherInfoDiv.setAttribute('data-type', key);

    weatherInformationFragment.appendChild(weatherInfoDiv);
  }

  // * create unit button
  const unitButtonsContainer = createDiv();

  unitButtonsContainer.identify('id', 'unit-buttons-container');

  const unitButton = createElementEnhanced('button');
  unitButton.identify('id', 'unit-button');
  unitButton.setAttributes({
    type: 'button',
    'aria-label': `display temperature in degrees ${unitState.inactive.unit}`,
  });
  unitButton.textContent = unitState.inactive.unitButtonText;

  weatherInformationFragment.appendChild(unitButton);

  const searchInput = createElementEnhanced('input');
  searchInput.identify('id', 'search-input');
  searchInput.setAttributes({
    type: 'search',
    placeholder: 'Search Location…'
  });
  
  const searchIcon = createElementEnhanced('i');
  searchIcon.classList.add('fa-solid', 'fa-magnifying-glass');

  const searchButton = createElementEnhanced('button');
  searchButton.identify('id', 'search-button');
  searchButton.setAttributes({
    type: 'button',
    'aria-label': 'search by location'
  });
  searchButton.append(searchIcon);

  const searchBoxErrorDiv = createDiv();
  searchBoxErrorDiv.identify('id', 'search-box-error');
  searchBoxErrorDiv.classList.add('hidden');
  searchBoxErrorDiv.textContent = 'Please enter a valid location';

  const searchBox = createElementEnhanced('div');
  searchBox.identify('id', 'search-box');
  searchBox.append(
    searchInput,
    searchButton,
    searchBoxErrorDiv
  );

  weatherInformationFragment.appendChild(searchBox);


  return weatherInformationFragment;
}
