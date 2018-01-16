import React from 'react';
import ReactDOM from 'react-dom';

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
            if (tyyppi === 1) {
                this.setState({ hyva: this.state.hyva + 1 })
            } else if (tyyppi === 0) {
                this.setState({ neutraali: this.state.neutraali + 1 })
            } else if (tyyppi === -1) {
                this.setState({ huono: this.state.huono + 1 })
            }
            console.log(this.state)
        }

    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <button onClick={this.lisaaPalaute(1)}>hyvä</button>
                <button onClick={this.lisaaPalaute(0)}>neutraali</button>
                <button onClick={this.lisaaPalaute(-1)}>huono</button>
                <div>
                    <h1>statistiikka</h1>
                    <p>
                        hyvä: {this.state.hyva}<br/>
                        neutraali: {this.state.neutraali}<br/>
                        huono: {this.state.huono}
                    </p>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
