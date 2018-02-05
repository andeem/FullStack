import React from 'react';
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
  }

  componentDidMount = () => {
    personService
      .getAll()
      .then(response => { this.setState({ persons: response }) })
  }

  addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (!this.state.persons.some(person => person.name === personObject.name)) {
      personService
        .create(personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response),
            newName: '',
            newNumber: '',
            notification: 'Uusi henkilö lisätty onnistuneesti'
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 5000)
        })
    } else {
      console.log('wtf')
      const oldPerson = this.state.persons.find(person => person.name === personObject.name)
      const updatedPerson = { ...oldPerson, number: personObject.number }

      personService.update(updatedPerson)
        .then(response => {
          this.setState({
            persons: this.state.persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson),
            newName: '',
            newNumber: '',
            notification: 'Numero päivitetty'
          })
          setTimeout(() => {
            this.setState({ notification: null })
          }, 5000)
        })
        .catch(error => {
          alert(`Henkilö '${updatedPerson.name}' on jo valitettavasti poistettu`)
          this.setState({
            persons: this.state.persons.filter(person => person.id !== updatedPerson.id)
          })
        })
      console.log(updatedPerson)
    }
  }

  nameChanged = (event) => {
    this.setState({ newName: event.target.value })
  }

  numberChanged = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  filterChanged = (event) => {
    this.setState({ filter: event.target.value })
  }

  onPoistoClick = (person) => {
    return () => {
      personService.deletePerson(person)
      this.state.persons.splice(this.state.persons.indexOf(person), 1)
      this.setState({
        persons: this.state.persons,
        notification: 'Numero poistettu'
      })
      setTimeout(() => {
        this.setState({notification: null})
      }, 5000)
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.notification} />
        <div>
          rajaa näytettäviä:
          <input value={this.state.filter} onChange={this.filterChanged} />
          <br />
          <br />
        </div>
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
        <Persons persons={this.state.persons
          .filter(person => person.name.toLowerCase().match(this.state.filter.toLowerCase()))}
          onPoistoClick={this.onPoistoClick}
        />
      </div>
    )
  }
}

export default App
