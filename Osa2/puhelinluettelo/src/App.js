import React from 'react';
import Persons from './components/Persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '0401234567'
        }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const persons = this.state.persons.some(person => person.name === personObject.name) ? this.state.persons : this.state.persons.concat(personObject)
    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  nameChanged = (event) => {
    this.setState({ newName: event.target.value })
  }

  numberChanged = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    nimi:
                  </td>
                  <td>
                    <input value={this.state.newName} onChange={this.nameChanged} />
                  </td>
                </tr>
                <tr>
                  <td>
                    numero:
                  </td>
                  <td>
                    <input value={this.state.newNumber} onChange={this.numberChanged} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Persons persons={this.state.persons} />
      </div>
    )
  }
}

export default App
