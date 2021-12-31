import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './compenents/Home';
import Player from './compenents/Player'
import E404 from './compenents/404'

// ========== my pages ==========
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>} />
            <Route path="/player" element= {<Player/>} />
            <Route path="/404" element={<E404/>} />
          </Routes>
        </div>
      </Router>

    );
  }
}

export default App;
