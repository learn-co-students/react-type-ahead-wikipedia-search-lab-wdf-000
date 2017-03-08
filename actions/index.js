'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();
  // resultStore.isOutdated(requested);
  // resultStore.setState(requested);

  return wikipedia.search(query).then((data) => {
    // TODO
    if (resultStore.isOutdated(requested)) {
      return;
    }
    const [q, t, d, l] = data;
    const results = t.map((title, i) => ({
      title,
      description: d[i],
      link: l[i]
    }))
    resultStore.setState({
      results,
      updated: requested
    })
  });
};

module.exports = { search };
