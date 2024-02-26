export function convertCamelCaseToTextContent(key) {
  return key.replace(/([A-Z])/g, ' $1').toLowerCase();
}
