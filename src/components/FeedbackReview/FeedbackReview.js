import React, { Component } from 'react';

class FeedbackReview extends Component {

  

  handleClick = () => {
    // alert('you are submitting this form');
    //Change Location"
    this.props.history.push('/FeedbackSubmit')
  }

  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    )
  }
}

export default FeedbackReview;