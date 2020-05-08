import React from 'react';
import Footer from './Component/footer'
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Component/dashboard'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/Dashboard' component={Dashboard}></Route>
      </Switch>
    </Router>
      )
}

export default App;
