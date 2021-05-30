import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
// import Sidebar from './components/Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Incubator from "./pages/Incubator/Incubator";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/incubator'>
          <Incubator></Incubator>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;