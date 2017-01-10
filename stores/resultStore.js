'use strict';

const Store = require('./Store');

class ResultStore extends Store{
  constructor(){
    super()
    this.state = {
      results: [],
      updated: new Date(),
      query: ''
    }
  }


  isOutdated(oldState) {
    return this.getState().updated > oldState ? true : false
   }







}

module.exports = new ResultStore
