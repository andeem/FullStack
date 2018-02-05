import React from 'react'

const Country = (props) => {
    return props.showAll ? (
        <div>
            <h1>{props.country.name}</h1>
            capital: {props.country.capital}<br />
            population: {props.country.population}<br />
            <img alt={props.country.name} src={props.country.flag} width="200" height="100" />
        </div>
    ) : (
            <div onClick={props.click(props.country)}>
                {props.country.name}

            </div>
        )
}

export default Country