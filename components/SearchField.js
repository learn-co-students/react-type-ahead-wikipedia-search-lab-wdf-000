'use strict'

const React = require('react');


class SearchField extends React.Component{


  render(){
    return(
      <input className="search-field" value={this.props.value} onChange={this.props.onChange}/>


    )
  }

}

module.exports = SearchField;
