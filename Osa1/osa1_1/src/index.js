import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}

const Sisalto = (props) => {
    let lista = props.tehtavat.map(function (item) {
        return <p key={item.id.toString()}>{item.osa} {item.tehtavia}</p>
    })
    return lista
}

const Yhteensa = (props) => {
    let maara = 0
    for (let i = 0; i < props.tehtavat.length; i++) {
        maara += props.tehtavat[i].tehtavia
    }
    return (
        <p>Yhteensä {maara} tehtävää</p>

    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const tehtavat = [{ id: 1, osa: "Reactin perusteet", tehtavia: 10 }, { id: 2, osa: "Tiedonvälitys propseilla", tehtavia: 7 }, { id: 3, osa: "Komponenttien tila", tehtavia: 14 }]
    return (
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto tehtavat={tehtavat} />
            <Yhteensa tehtavat={tehtavat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)