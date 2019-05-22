import React from 'react';
import BrowseClassList from './BrowseClassList';
import MyClassList from './MyClassList';
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
            <Link exact to="/client/my-classes">
              My Classes
            </Link>
            <Link exact to="/client/passes">
              Passes
            </Link>
            
            <Route path="/client/browse-classes" component={BrowseClassList} />
            <Route path="/client/my-classes" component={MyClassList} />
            <Route path="/client/passes" component={ClassPass} />

        </Router>
    )
}

export default ClientView