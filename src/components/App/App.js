import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <main className="App">
          <Route path="/" component={Feeling} exact />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Support" component={Support} />
          <Route path="/Comments" component={Comments} />
          <Route path="/Review" component={Review} />
        </main>
      </Router>
    );
  }
}

export default App;

