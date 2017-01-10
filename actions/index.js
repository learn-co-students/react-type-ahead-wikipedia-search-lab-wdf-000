'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  // function dataHash(data){
  //   var slate = [{title: data[1][0], description: data[1][1]}, {title: data[2][0], description: data[2][1]}]
  //   resultStore.setState(slate)
  //   return slate
  // }
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


  return wikipedia.search(query).then((data) => {
    // dataHash(data)
    // resultStore.isOutdated(requested)
    if(!resultStore.isOutdated(requested)){
      dataHash(data, requested)
    }
  });
};





module.exports = {
  search
};
