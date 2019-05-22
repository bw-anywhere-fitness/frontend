import React from 'react';
import BrowseClassList from './BrowseClassList';
import ClientClassList from './ClientClassList';
import ClassPass from './ClassPass';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function ClientView() {
    return (
        <Router>
            <p>Client View</p>
            <p>Test</p>
            <Link exact to="/client/browse-classes">
              Browse Classes
            </Link>
            <Link exact to="/client/client-classes">
              My Classes
            </Link>
            <Link exact to="/client/passes">
              Passes
            </Link>
            
            <Route path="/client/browse-classes" component={BrowseClassList} />
            <Route path="/client/client-classes" component={ClientClassList} />
            <Route path="/client/passes" component={ClassPass} />

        </Router>
    )
}

export default ClientView