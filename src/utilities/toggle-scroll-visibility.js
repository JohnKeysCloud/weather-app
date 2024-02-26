function toggleScrollBarVisibility(container) {
  if (container.scrollWidth > container.clientWidth) {
    // ? Content overflows, show scrollbar
    container.style.overflow = 'auto';
  } else {
    // ? Content does not overflow, hide scrollbar
    container.style.overflow = 'hidden';
  }
}

export { toggleScrollBarVisibility };