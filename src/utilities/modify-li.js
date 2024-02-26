function modifyListElement(listElement, listItemIndex, listElementContentArray, id) {
  const modifiedListElement = listElement.querySelector(`li:nth-child(${listItemIndex})`);

  modifiedListElement.setAttribute('id', id);
  modifiedListElement.innerHTML = ''; // clear the li

  listElementContentArray.forEach((element) => {
    modifiedListElement.appendChild(element);
  });

  return modifiedListElement;
}

export { modifyListElement };