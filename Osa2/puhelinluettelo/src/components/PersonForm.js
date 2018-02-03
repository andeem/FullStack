import React from 'react'

const PersonForm = (props) =>
{
    return (
        <form onSubmit={props.addName}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    nimi:
                  </td>
                  <td>
                    <input value={props.newName} onChange={props.nameChanged} />
                  </td>
                </tr>
                <tr>
                  <td>
                    numero:
                  </td>
                  <td>
                    <input value={props.newNumber} onChange={props.numberChanged} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    )
}

export default PersonForm