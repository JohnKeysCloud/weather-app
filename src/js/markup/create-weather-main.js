import { createMain, createSection } from '../../utilities/create-element-enhanced.js';

// > --------------------------------------------------------------

export function createWeatherMain() {
  const main = createMain();
  main.append(
    createSection('id', 'weather-info'),
    createSection('id', 'cyclone-logo-section'),
    createSection('id', 'weather-details')
  );

  return main;
}