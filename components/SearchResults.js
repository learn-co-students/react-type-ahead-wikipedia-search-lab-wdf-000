'use strict'

const React = require('react');

class SearchResults extends React.Component{

  render(){
    const result = this.props.results
    const results = result ? result.map((res) =>
      <li><p>{res.description}</p>
        <a href={res.link}>{res.title}</a>
      </li>
    ) : null
    return(
      <ul className="search-results">
      {results}
      </ul>


    )
  }

}

module.exports = SearchResults;
