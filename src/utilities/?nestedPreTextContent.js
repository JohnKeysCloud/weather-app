function nestedPreTextContent(parentElement, preTextContent, textPartsObject) {
  textPartsObject.forEach(part => {
    if (part === preTextContent) {
      const nestedPreTextContent = document.createElement('span');
      nestedPreTextContent.classList.add('pre-text-content');
      nestedPreTextContent.textContent = part;

      parentElement.appendChild(nestedPreTextContent);
    } else {
      parentElement.appendChild(document.createTextNode(part));
    }
  });
}

export { nestedPreTextContent };

