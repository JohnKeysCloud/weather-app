// > --------------------------------------------------------------

export const units = ['celcius', 'farenheit'];
export const unitButtonText = ['Display °C', 'Display °F'];
export let unitState = {
  inactive: {
    unit: units[0],
    unitButtonText: unitButtonText[0],
  },
  active: {
    unit: units[1],
  },
};

// > --------------------------------------------------------------

export let appState = {
  activeScale: unitState.active.unit,
  activeLocation: 'new+york',
};


// > --------------------------------------------------------------

import { createCounter } from '../utilities/counter';
export let errorState = {
  counter: createCounter()
};

// > --------------------------------------------------------------