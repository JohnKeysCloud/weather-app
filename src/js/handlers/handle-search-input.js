import { renderDOM } from '../app';

export function handleSearchInput(event) {
  if (event.key !== 'Enter') return;
  
  const searchInputValue = event.target.value;

  renderDOM(searchInputValue);
}

