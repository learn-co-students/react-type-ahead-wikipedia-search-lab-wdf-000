'use strict'

const React = require('react');

const SearchField = props => (
  <input className='search-field' onChange={props.onChange} value={props.value} />
);

module.exports = SearchField;
