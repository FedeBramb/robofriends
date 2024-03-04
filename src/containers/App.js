import React, { useState, useEffect } from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {
    //Inizializza lo state come un array vuoto
    //Secondo parametro funzione che cambia quello stato
    //L'array vuoto a fine funzione serve per utilizzare useEffect
    // esclusivamente quando App viene renderizzato
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("") 
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})  
    }, [])
    
    const onSearchChange = (event) => { 
        setSearchfield( event.target.value )    
    }
    
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
    

export default App; 