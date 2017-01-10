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


  // componentWillmount(){
  //   this.setState({
  //     results: [[], [], []],
  //     query: ""
  //   })
  // }


  componentDidMount(){
    this.removeListener = resultStore.addListener((state) => {
      this.setState({results: state})
    });
    this.setState({results: resultStore.getState()})
  }


  componentWillUnmount(){
    this.removeListener();
  }


  handleQueryChange(event){
  this.setState({
    query: event.target.value
  })

  if(event.target.value.length > 2){
    actions.search(event.target.value)
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
