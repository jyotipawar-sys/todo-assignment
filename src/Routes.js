import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import Home from './Home';
import App from './todo/App';
import Popover from './popover/Popover'
function Routes(){
    return(
        <div>
        <Router history={history} >
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/App" component={App}/>
                <Route path="/Popover" component={Popover}/>
            </Switch>
        </Router>
    </div>
    )
}

export default Routes;