import React, { Component } from 'react';

class FeedBackReview extends Component {

  handleClick = () => {
    alert('you are submitting this form');
    //Change Location"
    this.props.history.push('/FeedbackSubmit')
  }

  render() {
    return (
      <div>
        <h1>Feedback Review</h1>
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    )
  }
}

export default FeedBackReview;