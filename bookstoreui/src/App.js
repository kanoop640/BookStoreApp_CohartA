import React from 'react';
import Footer from './Component/footer'
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Component/dashboard'
import './App.css';
import OrderSummary from './Component/orderSummary'
import Mycart from './Component/MyCart';
function App() {
  
  return (
    <Router>
      <Switch>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/orderSummary' component={OrderSummary}></Route>
      <Route path='/MyCart' component={Mycart}></Route>
      </Switch>
    </Router>
      )
}

export default App;
