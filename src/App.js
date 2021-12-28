import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './compenents/Home';

// ========== my pages ==========
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>}/>
          </Routes>
        </div>
      </Router>

    );
  }
}

export default App;
