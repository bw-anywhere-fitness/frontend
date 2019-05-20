import React from 'react';
import ClassList from './ClassList';
import ClassPass from './ClassPass';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function ClientView() {
    return (
        <Router>
            <p>Client View</p>
            <p>Test</p>
            <Link exact to="/client/classes">
              Classes
            </Link>
            <Link exact to="/client/passes">
              Passes
            </Link>
            
            <Route path="/client/classes" component={ClassList} />
            <Route path="/client/passes" component={ClassPass} />

        </Router>
    )
}

export default ClientView