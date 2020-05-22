'use strict';

export default class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }



  addListener(listener){
  this.listeners.push(listener);
  const removeListener = () => {
      const index = this.listeners.indexOf(listener)
      this.listeners.splice(index, 1)
    }
    return removeListener
  }


  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState() {
    return this.state;
  }
}
