import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const list = props.persons.map(person => <Person key={person.name} person={person}/>)
    return (
        list
    )
}

export default Persons