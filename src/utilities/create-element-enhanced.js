// * METHODS: 
// PARAM: (string)
export function createElementEnhanced(tagName) {
  const element = document.createElement(tagName);

  // PARAM: identify(string, string/array)
  element.identify = function (identifierType, ...values) {
    if (identifierType === 'class') {
      this.classList.add(...values); // Add all values as classes
    } else if (identifierType === 'id') {
      // Ensure only the first value is set as the ID
      this.setAttribute('id', values[0]);
    } else {
      console.error('Invalid identifier type. Must be "class" or "id".');
    }
  };

  // PARAM: setAttributes(object)
  element.setAttributes = function (attributes) {
    for (const key in attributes) {
      this.setAttribute(key, attributes[key]);
    }
  };

  return element;
}

// > --------------------------------------------------------------

// PARAM: (string)
export function createDiv(textContent) {
  const div = createElementEnhanced('div');

  if (!textContent) return div;

  div.textContent = textContent;

  return div;
}

// PARAM: (string)
export function createMain(identifierValue) {
  const main = createElementEnhanced('main');
  if (identifierValue) main.identify('id', identifierValue);
  
  return main;
}

// PARAM: (string, array)
export function createSection(identifierType, values) {
  const section = createElementEnhanced('section');
  section.identify(identifierType, values);

  return section;
}