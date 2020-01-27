import React, { Component } from 'react';

class FeedbackReview extends Component {

  // makeFeedback = () => {
  //   console.log(this.state.feedback, this.props.reduxState);
  //   this.setState({
  //       feedback: {
  //           ...this.state.feedback,
  //           feeling: this.props.reduxState.Feeling,
  //           understanding: this.props.reduxState.Understanding,
  //           support: this.props.reduxState.Support,
  //           comments: this.props.reduxState.Comments
  //       }
  //   })
  //   console.log(this.state.feedback);        
  //   this.dispatchFeedback()
  // }

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