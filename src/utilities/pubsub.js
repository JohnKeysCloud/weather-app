// * events (publish subscribe / mediator) pattern
let events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
    }
  },
};

// ! when an event is called with on:
// * event name
// *   function to run
// *   add function to events object
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *
// * when an event is called with emit:
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *   events.events.eventName.forEach(fn => fn(data));
// *
// * when an event is called with off:
// *   events = {
// *     events: {
// *       eventName: [fn],
// *     },
// *   }
// *   events.events.eventName.forEach(fn => {
// *     if (fn === fn) {
// *       events.events.eventName.splice(i, 1);
// *     }
// *   });
// *
// *   function to remove
// *   remove function from events object
// *   events = {
// *     events: {
// *       eventName: [],
// *     },
// *   }
// *

export { events };