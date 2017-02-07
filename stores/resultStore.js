'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  
  isOutdated(updated) {
    return this.getState().updated > updated;

  }
}

module.exports = new ResultStore({
  results: [],
  updated: new Date(),
});
