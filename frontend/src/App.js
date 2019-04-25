import React from 'react';
import './App.css';
import NavBar from './navBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Show from './show';
import Login from './login'
import ErrorPage from './errorPage';

function Success() {
  return <Show/>
}

function AppRouter() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/success/" component={Success}/>
          <Route path="/error/" component={ErrorPage}/>
        </Router>
      </div>
    </div>
  );
}

export default AppRouter;
