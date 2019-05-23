import React from 'react';
import './App.css';
import InstructorHome from './components/InstructorHome';
import Login from './components/Login';
import Signup from './components/Signup';
import ClientView from './components/ClientComponents/ClientView';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import ClassForm from './components/ClassForm/ClassForm';

function App() {
  // console.log(Boolean(localStorage.getItem("token")));
  return (
    <Router>
      { localStorage.getItem("token")
        ?
        <nav>
          <Link to="/clientview">Client View</Link>
        </nav>
        :
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      }


      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/instructor" component={InstructorHome} />
      <PrivateRoute exact path="/instructor/addclass" component={ClassForm} />
      <PrivateRoute path="/clientview" component={ClientView} />

    </Router>
  );
}

export default App;
