import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    let lista = props.kurssi.osat.map(item => <Osa key={item.id} osa={item} />)
        return lista
}

const Osa = (props) => {
    return (
        <p>{props.osa.osa} {props.osa.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    let maara = props.kurssi.osat.reduce(((lkm, osa) => lkm + osa.tehtavia), 0)
    return (
        <p>Yhteensä {maara} tehtävää</p>

    )
}

const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto kurssi={props.kurssi} />
            <Yhteensa kurssi={props.kurssi} />
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                id: 1,
                osa: "Reactin perusteet",
                tehtavia: 10
            },
            {
                id: 2,
                osa: "Tiedonvälitys propseilla",
                tehtavia: 7
            },
            {
                id: 3,
                osa: "Komponenttien tila",
                tehtavia: 14
            }

        ]
    }
    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)