'use strict';

import Store from './Store';

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

const resultStore = new ResultStore();

export default resultStore;
