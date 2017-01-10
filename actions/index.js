'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');


const search = (query) => {
  const requested = new Date()
  return wikipedia.search(query).then((data) => {
    if(!resultStore.isOutdated(requested)){
      dataHash(data, requested)
    }
  });
};


  function dataHash(data, requested){
   var titles = data[1];
   var descriptions = data[2];
   var links = data[3];
   var articles = []
   for(var i=0; i< titles.length; i++){
       var hash = {
         title: titles[i],
         description: descriptions[i],
         link: links[i]
       }
       articles.push(hash)
   }
   resultStore.setState({
     results: articles,
     updated: requested,
  });
}





module.exports = {
  search
};
