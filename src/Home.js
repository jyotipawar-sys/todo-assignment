import React from 'react';
import history from './history'
import './Home.css';

function Home(){
    return(
        <div>
            <h2>Home page</h2>
            <button onClick={()=> history.push('./App')} className="App-button">App</button>
            <button onClick={()=> history.push('./Popover')} className="popover-page-button">Popover</button>
           
        </div>
    )
}

export default Home;
