import React, { Component } from 'react';
import axios from 'axios'
import Countries from './components/countries'
import Search from './components/search'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => { this.setState({ countries: response.data }) })
  }

  searchValueChanged = (event) => {
    this.setState({ filter: event.target.value })
  }

  click = (country) => {
    return () => this.setState({ filter: country.name })
  }


  render() {
    return (
      <div>
        <Search filter={this.state.filter} onChange={this.searchValueChanged} />
        <Countries countries={this.state.countries} filter={this.state.filter} click={this.click} />
      </div>
    )
  }
}

export default App;
