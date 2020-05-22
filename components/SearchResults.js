'use strict'

import React from 'react';

// const SearchResults = ({ results }) => (
//   <ul className='search-results'>
//   </ul>
// );

class SearchResults extends React.Component {
  render() {
    const results_li = this.props.results.map((result, index) =>
    <li i={index}>
      <a href={result.link}>{result.title}</a>
      <p>{result.description}</p>
    </li>
  )
    return(
        <ul className='search-results'>
          {results_li}
        </ul>
    )
  }
}

export default SearchResults;
