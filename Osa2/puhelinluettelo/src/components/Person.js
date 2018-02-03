import React from 'react'

const Person = (props) =>
    <tr>
        <td>
        {props.person.name}
        </td>
        <td>
            {props.person.number}
        </td>
    </tr>

export default Person