import { checkStorageAvailability } from './check-storage-availability';

// > --------------------------------------------------------------

function updateLocalStorage(key, value) {
  if (checkStorageAvailability('localStorage')) {
    localStorage.setItem(key, value);
  } else {
    alert('Your current browser does not support local storage.');
  }
}

export { updateLocalStorage };