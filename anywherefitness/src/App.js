import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/PLACEHOLDER">PLACEHOLDER</Link>
          </li>
        </ul>

      <Route path="/login" component={Login}  />
      {/* below line commented out for now */}
      {/* <PrivateRoute exact path="/PLACEHOLDER" component={PLACEHOLDER} />   */}
    </Router>
  );
}

export default App;
