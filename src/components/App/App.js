import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home.js'
import Understanding from '../Understanding/Understanding.js'
import Supported from '../Supported/Supported.js'
import Comments from '../Comments/Comments.js'
import FeedbackReview from '../FeedbackReview/FeedbackReview.js'
import FeedbackSubmit from '../FeedbackSubmit/FeedbackSubmit.js'

import { HashRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <footer className="App-footer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Understanding">Understanding</Link>
            </li>
            <li>
              <Link to="/Supported">Supported</Link>
            </li>
            <li>
              <Link to="/Comments">Comments</Link>
            </li>
            <li>
              <Link to="/FeedbackReview">FeedbackReview</Link>
            </li>
            <li>
              <Link to="/FeedbackSubmit">FeedbackSubmit</Link>
            </li>
          </ul>
        </footer>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Supported" component={Supported} />
          <Route path="/Comments" component={Comments} />
          <Route path="/FeedbackReview" component={FeedbackReview} />
          <Route path="/FeedbackSubmit" component={FeedbackSubmit} />
        </div>
      </Router>
    );
  }
}

export default App;
