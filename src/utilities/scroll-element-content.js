
function scrollElementContent(containerElement, direction, speed) {
  let elementMinimumWidth = containerElement.scrollWidth;
  // ? equal to the minimum width the element requires in order to fit all
  // ? the content in the viewport without using a horizontal scrollbar in pixels
  // ? more info: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth

  let elementActualWidth = containerElement.clientWidth;
  // ? zero for inline elements and elements with no css, otherwise it's the inner
  // ? width of an element in pixels
  // ? more info: https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth 

  let maxScroll = elementMinimumWidth - elementActualWidth;
  // ? the mimimum width to fit all contnet vs the actual width of the element tell us the
  // ? the total scrollable distance
  
  let scrollDirection =
    direction === 'forward'
      ? 1
      : direction === 'backward'
        ? -1
        : console.error(`Direction parameter Accepts "forward or "backward" \n You entered: "${direction}"`);

  function scrollElementContent() {
    let currentScrollPosition = containerElement.scrollLeft;
    // ? currentScrollPosition is the current distance in pixels
    // ? that an elements content is scrolled from an the elements
    // ? left edge

    let newDistanceToCreate = speed * scrollDirection;
    // ? newDistanceToCreate calculates the number of pixels to
    // ? scroll in the current frame

    let currentScroll = currentScrollPosition + newDistanceToCreate;
    // ? the full distance away from the elements left edge that
    // ? the elements content will be for the current frame

    // * Reverse direction at the ends
    if (currentScroll >= maxScroll) { 
      // ? greater than or equal too is more reliable here than 
      // ? equality it ensures that the condition is met even if
      // ? the exact value is skipped over
      // ? it also accounts for edge cases where content might be
      // ? scrolled slightly more than 'maxScroll' due to
      // ? user interaction or browser behavior
      scrollDirection = -1; // * Change direction to backward
    } else if (currentScroll <= 0) {
      // ? same concept here as above
      scrollDirection = 1; // * Change direction to forward
    }

    containerElement.scrollLeft = currentScroll;

    requestAnimationFrame(scrollElementContent);
  }

  scrollElementContent(); // Start the scrolling
}

export { scrollElementContent };