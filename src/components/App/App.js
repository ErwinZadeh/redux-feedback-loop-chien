import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home.js'
import Understanding from '../Understanding/Understanding.js'
import Support from '../Support/Support.js'
import Comments from '../Comments/Comments.js'
import FeedbackReview from '../FeedbackReview/FeedbackReview.js'
import FeedbackSubmit from '../FeedbackSubmit/FeedbackSubmit.js'

import { HashRouter as Router, Route } from "react-router-dom";
// import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Support" component={Support} />
          <Route path="/Comments" component={Comments} />
          <Route path="/FeedbackReview" component={FeedbackReview} />
          <Route path="/FeedbackSubmit" component={FeedbackSubmit} />
        </div>
      </Router>
    );
  }
}

export default App;
// export default connect()(App);
