function addLinkToHead(href, rel, attributes = {}) {
  var link = document.createElement('link');
  link.setAttribute('href', href);
  link.setAttribute('rel', rel);

  for (let attribute in attributes) {
    link.setAttribute(attribute, attributes[attribute]);
  }

  document.head.appendChild(link);
}

export { addLinkToHead };
