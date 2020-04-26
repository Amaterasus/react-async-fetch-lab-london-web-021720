// create your App component here
import React, { Component } from "react"


export default class App extends Component {


    state = {
        currentAstronauts: []
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => this.setState({currentAstronauts: data.people}))
    }

    showLocation = (craft) => {
        console.log(craft)
    }

    render(){
        return <div>
            {this.state.currentAstronauts.map((person, key) => <h2 onClick={() => this.showLocation(person.craft)} key={key}>{person.name}</h2>)}
        </div>
    }
}