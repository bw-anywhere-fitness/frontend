import React from 'react';
import AvailableClassList from './AvailableClassList';
import ClientClassList from './ClientClassList';
import "./ClientView.scss";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function ClientView() {
  return (
    <Router>
      <div className="client-home-container">
        <div className="navigation">
          <h2>Hello!</h2>
          <nav>
            <Link className="classes nav-item" exact to="/client/available-classes">
              Available Classes
            </Link>
            <Link className="add-class nav-item" exact to="/client/client-classes">
              My Classes
            </Link>
          </nav>
        </div>
        <Route path="/client/available-classes" component={AvailableClassList} />
        <Route path="/client/client-classes" component={ClientClassList} />



      </div>
    </Router>
  )
}

export default ClientView