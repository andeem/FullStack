import React from 'react'

const Person = (props) =>
    <tr>
        <td>
            {props.person.name}
        </td>
        <td>
            {props.person.number}
        </td>
        <td>
            <button onClick={props.onPoistoClick(props.person)}>Poista</button>
        </td>
    </tr>

export default Person