import React, { Component } from 'react'; /*per utilizzare la classe App*/
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {
    constructor() { /*utilizziamo lo state*/
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => { /* */
    this.setState({ searchfield: event.target.value })    
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;

/* La ragione principale per cui App è una classe 
invece di una funzione normale è che stai utilizzando 
la classe Component di React per definire un componente 
di classe. I componenti di classe in React sono una forma 
di classi ES6 che estendono la classe base React.Component.
Questo ti consente di sfruttare le funzionalità offerte 
da React, come lo state, i cicli di vita del componente, 
e così via.*/