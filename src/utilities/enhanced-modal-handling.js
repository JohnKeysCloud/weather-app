// * UTILITIES
import { setAttributes } from './set-attributes';

// > --------------------------------------------------------------

function showModalEnhanced(modal) {
  modal.showModal();
  setAttributes(modal, {
    'data-hidden': 'visible',
    'aria-label': 'visible',
  });
}

function closeModalEnhanced(element) {
  element.close();
  setAttributes(element, {
    'data-hidden': 'hidden',
    'aria-label': 'hidden',
  });
}

export { showModalEnhanced, closeModalEnhanced };