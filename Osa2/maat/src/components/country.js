import React from 'react'

const Country = (props) => {
    let click = (country) => {
        return (<div>
            <h1>{country.name}</h1>
            capital: {country.capital}<br />
            population: {country.population}<br />
            <img alt={country.name} src={country.flag} width="200" height="100" />
        </div>)
    }
    return props.showAll ? (
        <div>
            <h1>{props.country.name}</h1>
            capital: {props.country.capital}<br />
            population: {props.country.population}<br />
            <img alt={props.country.name} src={props.country.flag} width="200" height="100" />
        </div>
    ) : (
            <div onClick={click}>
                {props.country.name}

            </div>
        )
}

export default Country