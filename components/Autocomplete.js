'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchField = require('./SearchField');
const SearchResults = require('./SearchResults');

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: resultStore.getState().query
    };
    this.handleQueryChange = this.handleQueryChange.bind(this)
  }


  componentDidMount(){
    this.removeListener = resultStore.addListener(({results: results, query: query}) => {
      this.setState({
        results: results,
        query: query
      })
    }
  )}

  componentWillUnmount(){
    this.removeListener();
  }


  handleQueryChange(ev){
    this.setState({
      query: ev.target.value
    })
    if(ev.target.value.length > 2){
      actions.search(ev.target.value)
    }
  }

  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.handleQueryChange}/>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

module.exports = Autocomplete;
