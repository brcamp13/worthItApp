
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENT
import FirstPage from '../components/FirstPage/FirstPage';
import SecondPage from '../components/SecondPage/SecondPage'

const routes=(
    <Router>
        <div>
            <Route exact path="/" component={FirstPage} />
            <Route path="/secondPage" component={SecondPage} />
        </div>
    </Router>
)

export default routes;