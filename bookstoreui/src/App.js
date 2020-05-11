import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import './App.css';

function App() {
  
  return (
    <Router>
      <Switch>
      <Route path='/' component={Dashboard}></Route>
      </Switch>
    </Router>
      )
}

export default App;
