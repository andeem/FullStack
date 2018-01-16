import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    let lista = props.kurssi.osat.map(function (item) {
        return <Osa osa={item} />
    })
    return lista
}

const Osa = (props) => {
    return (
        <p>{props.osa.osa} {props.osa.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    let maara = 0
    for (let i = 0; i < props.kurssi.osat.length; i++) {
        maara += props.kurssi.osat[i].tehtavia
    }
    return (
        <p>Yhteensä {maara} tehtävää</p>

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
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)