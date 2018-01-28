import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.func}>{props.teksti}</button>
    )
}

const Statistics = (props) => {
    if (props.app.state.hyva + props.app.state.huono + props.app.state.neutraali < 1) {
        return (
            <div><p>ei yhtään palautetta annettu</p></div>
        )

    }
    return (
        <div>
            <h1>statistiikka</h1>
            <table>
                <tbody>
                    <Statistic name="hyvä" value={props.app.state.hyva} />
                    <Statistic name="neutraali" value={props.app.state.neutraali} />
                    <Statistic name="huono" value={props.app.state.huono} />
                    <Statistic name="keskiarvo" value={(props.app.state.hyva - props.app.state.huono) / (props.app.state.hyva + props.app.state.huono + props.app.state.neutraali)} />
                    <Statistic name="positiivisia" value={props.app.state.hyva / (props.app.state.hyva + props.app.state.huono + props.app.state.neutraali) * 100} unit="%" />
                </tbody>
            </table>
        </div>)
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value} {props.unit}</td>
        </tr>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            huono: 0,
            neutraali: 0
        }
        console.log(this.state)
    }

    lisaaPalaute = (tyyppi) => {
        return () => {
            this.setState({ [tyyppi]: this.state[tyyppi] + 1 })
        }

    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button teksti="hyvä" func={this.lisaaPalaute("hyva")} />
                <Button teksti="neutraali" func={this.lisaaPalaute("neutraali")} />
                <Button teksti="huono" func={this.lisaaPalaute("huono")} />
                <Statistics app={this} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
