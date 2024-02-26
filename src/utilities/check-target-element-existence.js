function checkTargetElementExistence(selector) {
  const targetElement = document.querySelector(selector);
  
  if (!targetElement) {
    console.error(`Element not found for selector: ${selector}`);
    return;
  }

  return targetElement;
}

export { checkTargetElementExistence };