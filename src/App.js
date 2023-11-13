import React, { Component } from 'react'; /*per utilizzare la classe App*/
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

/*utilizziamo lo state, è un object*/
class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
/*Ogni volta che creiamo un metodo con una classe bisogna utulizzare arrow function 
se vogliamo cambiare state, this.setState({ searchfield: event.target.value })*/
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })    
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
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
e così via.
Abbiamo App component che due stati che devono comunicare fra loro,
robots e searchfield, passiamo a onSearch che ogni volta che avviene
un cambiamento comunica al constructor cosa abbiamo digitato nel
searchfield, che modifica gli states,
ora abbiamo i dati che comunichiamo a CardList che filtriamo nei robots
ciò che abbiamo nel searchfield */