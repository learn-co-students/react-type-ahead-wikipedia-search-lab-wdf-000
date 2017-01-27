'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  constructor(initialState){
    super(initialState)
    this.state = {
      updated: new Date(),
      results: [],
      query: ''
    }
  }


  isOutdated(date){
    return this.getState().updated > date ? true : false
    // if (date >= this.getState().updated)
    //  {return true}
    //  else
    //  {return false }

  }
}

module.exports = new ResultStore();
