'use strict'

const React = require('react');

const SearchField = props => (
  <input className='search-field' value={props.value} onChange={props.onChange} />
);

module.exports = SearchField;
