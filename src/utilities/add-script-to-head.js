function addScriptToHead(src, attributes = {}) {
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'text/javascript');

  for (let attribute in attributes) {
    script.setAttribute(attribute, attributes[attribute]);
  }

  document.head.appendChild(script);
}

export { addScriptToHead };