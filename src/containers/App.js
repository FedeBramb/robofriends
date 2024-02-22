import React, { Component } from 'react'; /*per utilizzare la classe App*/
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

/*utilizziamo lo state, è un object*/
class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            this.setState({ robots: users });
        } catch (error) {
            console.error('Si è verificato un errore durante il recupero dei dati:', error);
        }
    } 
    
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })    
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>    
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }

export default App; 