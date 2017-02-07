'use strict'

const React = require('react');

const SearchField = props => (
  <input className="search-field" {...props} />
);

// class SearchField extends React.Component{
//   constructor(props){
//     super(props);
//   }


//   render() {
//     const { value, onChange } = this.props;
//     return(
//       <input className="search-field" onChange={this.onChange} value={value}/>
//     )
//   }

// }

module.exports = SearchField;
