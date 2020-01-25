import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <footer>
          <Router>
            <Feeling />
            <Understanding />
            <Supported />
            <Comments />
          </Router>
        </footer>
        <br/>
      </div>
    );
  }
}

export default App;
