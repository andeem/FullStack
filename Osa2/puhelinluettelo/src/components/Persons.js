import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const list = props.persons.map(person => <Person key={person.name} person={person} onPoistoClick={props.onPoistoClick} />)
    return (    
        <table>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

export default Persons