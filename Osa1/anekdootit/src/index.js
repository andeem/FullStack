import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: {}
        }
        for (let i = 0; i < this.props.anecdotes.length; i++) {
            this.state.votes[i] = 0;

        }
    }

    randomAnecdote = () => {
        return () => {
            let r = Math.floor(Math.random() * Math.floor(this.props.anecdotes.length));
            this.setState({ selected: r });
        }
    }

    vote = () => {
        return () => {
            let old = { ...this.state.votes };
            old[this.state.selected] += 1;
            this.setState({ votes: old })
            console.log(this.props.anecdotes)
            console.log(this.state.votes)
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <Button name="next anecdote" func={this.randomAnecdote()} />
                <Button name="vote" func={this.vote()} />
                <Statistics anecdotes={this.props.anecdotes} votes={this.state.votes} />
            </div>
        )
    }
}




const Statistics = (props) => {
    let votes = Object.values(props.votes).sort((a,b) => a - b);
    return (
        <div>
            <h1>anecdote with most vote:</h1>
            <p>{props.anecdotes[Object.values(props.votes).indexOf(votes[votes.length - 1])]}</p>
        </div>
    )
}
const Button = (props) => {
    return (
        <button onClick={props.func}>{props.name}</button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)