'use strict'

import React from 'react';

// const SearchField = props => (
//   <input className='search-field' />
// );


class SearchField extends React.Component {
  render () {
    return(
      <input className='search-field' value={this.props.value} onChange={this.props.onChange}/>
    )

  }
}


export default SearchField;
