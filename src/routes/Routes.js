
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// COMPONENT
import App from '../App'
import FirstPage from '../components/FirstPage/FirstPage';
import SecondPage from '../components/SecondPage/SecondPage'


// App will be loaded initially, which will then load firstPage
// App component exists so that props/state can be distributed between components
const routes=(
    <HashRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/firstPage" component={FirstPage} />
            <Route path="/secondPage" component={SecondPage} />
        </div>
    </HashRouter>
)

export default routes;