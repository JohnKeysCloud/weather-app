function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
}

function getLocalStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return null;
  }
}

export { getLocalStorageItem, setLocalStorageItem };