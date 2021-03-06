import React from 'react';
import './App.css';
import InstructorHome from './components/InstructorHome';
import YourClasses from "./components/YourClasses/YourClasses"
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
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/instructor" component={InstructorHome} />
      <PrivateRoute exact path="/instructor/addclass" component={ClassForm} />
      <PrivateRoute exact path="/instructor/yourclasses" component={YourClasses} />
      <PrivateRoute path="/clientview" component={ClientView} />

    </Router>
  );
}

export default App;
