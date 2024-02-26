import { appState, unitState, units, unitButtonText } from '../states';
import { renderDOM } from '../app';

export function handleUnitButton() {
  // ?  Determine the next state based on the current unit index
  const currentIndex = units.indexOf(unitState.inactive.unit);
  const nextIndex = (currentIndex + 1) % units.length; // ? This will toggle between 0 and 1

  // ? Update the unitState with the next unit and its corresponding button text
  unitState.active.unit = units[currentIndex];
  unitState.inactive.unit = units[nextIndex];
  unitState.inactive.unitButtonText = unitButtonText[nextIndex];
  
  // ? Update the unitButton attributes and textContent
  this.setAttribute(
    'aria-label',
    `Display temperature in ${unitState.inactive.unit}`
  );
  this.textContent = unitState.inactive.unitButtonText;

  renderDOM(appState.activeLocation);
}


