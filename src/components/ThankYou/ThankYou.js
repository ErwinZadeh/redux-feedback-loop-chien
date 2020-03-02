import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

  
    handleClick = () => {
    
        this.props.history.push('/');
    }
        

  render() {
    return (
      <div>
        <h1>THANK YOU</h1><br/>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    )
  }
}

export default connect()(ThankYou);