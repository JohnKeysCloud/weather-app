import { errorState } from './states';

// > --------------------------------------------------------------

export function displayErrorMessage(errorMessage) {

  const errorElement = document.getElementById('search-box-error');

  errorElement.textContent = `${errorMessage} (${errorState.counter.getCount()})`; // ? add counter
  errorElement.classList.remove('hidden');
}