import {
  createDiv,
} from '../../utilities/create-element-enhanced.js';

import { createDailyForecastContainer } from './create-daily-forecast-container.js';
import { createHourlyForecastContainer } from './create-hourly-forecast-container.js';

// > --------------------------------------------------------------

export function createWeatherForecastSectionContent(data) {
  const weatherForecastFragment = document.createDocumentFragment();

  const dailyForecastContainer = createDailyForecastContainer(data);
  const hourlyForecastContainer = createHourlyForecastContainer(data);

  const forecastContentContainer = createDiv();
  forecastContentContainer.identify('id', 'forecast-content-container');
  forecastContentContainer.append(dailyForecastContainer, hourlyForecastContainer); 

  weatherForecastFragment.append(forecastContentContainer);

  return weatherForecastFragment;
}
