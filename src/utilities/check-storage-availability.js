function checkStorageAvailability(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (exceptionVar) {
    return (
      exceptionVar instanceof DOMException &&
      // everything except Firefox
      (exceptionVar.code === 22 ||
        // Firefox
        exceptionVar.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        exceptionVar.name === 'QuotaExceededError' ||
        // Firefox if error code isn't present
        exceptionVar.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export { checkStorageAvailability };