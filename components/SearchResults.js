'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {
      results.map((result, i) => (
        <li >
          <p>{result.description}</p>
          <a href={result.link}>{result.title}</a>
        </li>
      ))
    }
  </ul>
);


module.exports = SearchResults;
