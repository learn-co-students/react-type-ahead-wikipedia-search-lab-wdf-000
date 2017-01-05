'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className='search-results'>
  {
    results.map((result) => (
      <li>
        <p>{result.description}</p>
        <a href={result.link}>{result.title}</a>
      </li>
    ))
  }
  </ul>
);

// class SearchResults extends React.Component{
//   constructor(){
//     super()
//     this.results = this.props.results.bind(this)
//   }
//   render(){
//     return(
//       {
//         results.map((result) =>
//           <li>
//             <p>{result.description}</p>
//             <a href={result.link}>{result.title}</a>
//           </li>
//         )
//       }
//     )
//
//   }
// }

module.exports = SearchResults;
