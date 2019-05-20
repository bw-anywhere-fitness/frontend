import React from 'react';
import './App.css';
import InstructorHome from './components/InstructorHome';
import Login from './components/Login';
import ClientView from './components/ClientComponents/ClientView';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import ClassForm from './components/ClassForm/ClassForm';

function App() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/clientview">Client</Link>
          </li>
          <li>
            <Link to="/PLACEHOLDER">PLACEHOLDER</Link>
          </li>
        </ul>

      <Route exact path="/login" component={Login}  />
      <PrivateRoute exact path="/instructor" component={InstructorHome} />
      <PrivateRoute exact path="/instructor/addclass" component={ClassForm} />  
      <Route path="/login" component={Login}  />
      <Route path="/clientview" component={ClientView} />
      {/* below line commented out for now */}
      {/* <PrivateRoute exact path="/PLACEHOLDER" component={PLACEHOLDER} />   */}

    </Router>
  );
}

export default App;
