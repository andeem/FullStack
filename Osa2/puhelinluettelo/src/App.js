import React from 'react';
import Persons from './components/Persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    const personObject = { name: this.state.newName }
    const persons = this.state.persons.some(person => person.name === personObject.name)  ? this.state.persons : this.state.persons.concat(personObject)
    this.setState({
      persons,
      newName: ''
    })
  }

  nameChanged = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.nameChanged} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Persons persons={this.state.persons}/>
      </div>
    )
  }
}

export default App
