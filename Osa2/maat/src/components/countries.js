import React from 'react'
import Country from './country'

const Countries = (props) => {
    let list = props.countries
        .filter(country => country.name.toLowerCase().match(props.filter.toLowerCase()))
        .map(country => <Country key={country.alpha3Code} country={country} filter={props.filter}/>)

    const list2 = list.length === 1 ? list[0] = <Country country={list[0].props.country} showAll={true}/> :  list.length <= 10 ? list : <div>too many countries</div>
    return (
        list2
    )
}

export default Countries