import React from 'react'

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

export default Kurssit