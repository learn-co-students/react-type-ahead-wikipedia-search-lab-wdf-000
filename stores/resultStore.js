'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  isOutdated(date) {
    return this.getState().updated > date
  }
}

module.exports = new ResultStore({results: [], updated: new Date()});
