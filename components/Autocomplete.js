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
      query: '',
      results: resultStore.getState().results
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(ev) {
    this.setState({
      query: ev.target.value,
      results: resultStore.getState().results
    })
    if (ev.target.value > 2) {
      actions.search(ev.target.value)
    }
  }

  componentDidMount() {
    this.removeListener = resultStore.addListener(({results}) => {
      this.setState({results})
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.onChange}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

module.exports = Autocomplete;
