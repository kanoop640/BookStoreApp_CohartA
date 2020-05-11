import React from 'react';
import Footer from './Component/footer'
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Component/dashboard'
import './App.css';
import OrderSummery from './Component/orderSummery'
function App() {
  return (
    <Router>
      <Switch>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/orderSummery' component={OrderSummery}></Route>
      </Switch>
    </Router>
      )
}

export default App;
