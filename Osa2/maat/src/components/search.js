import React from 'react'

const Search = (props) => {
    return (
        <div>
            find countries: 
            <input value={props.filter} onChange={props.onChange}/>
        </div>
    )
}

export default Search