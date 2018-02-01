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
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
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

const Kurssit = (props) => {
    let lista = props.kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)
    return lista
}

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                {
                    nimi: 'Reactin perusteet',
                    tehtavia: 10,
                    id: 1
                },
                {
                    nimi: 'Tiedonvälitys propseilla',
                    tehtavia: 7,
                    id: 2
                },
                {
                    nimi: 'Komponenttien tila',
                    tehtavia: 14,
                    id: 3
                }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]
    return (
        <div>
            <h1>Opetusohjelma</h1>
            <Kurssit kurssit={kurssit} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)