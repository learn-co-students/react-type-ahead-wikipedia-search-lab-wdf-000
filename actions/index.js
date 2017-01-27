'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');




function resultsOrganized(data, requested) {
  const dataMapped = [
    {title: data[1][0],
    description: data[2][0],
    link: data[3][0]},
    {title: data[1][1],
    description: data[2][1],
    link: data[3][1]}]

  resultStore.setState({
     results: dataMapped,
     updated: requested,
   })
};


const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
      if(!resultStore.isOutdated(requested)){
          resultsOrganized(data, requested)
     }
  });
};

module.exports = { search };
