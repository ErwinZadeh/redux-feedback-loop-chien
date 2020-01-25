import React, { Component } from 'react';

class Supported extends Component {

  handleClick = () => {
    alert('you are headed to feedback review before submiting!')
    ///CHANGE LOCATION???
    this.props.history.push('/FeedbackReview')
  }

  render() {
    return (
      <div>
        <h1>Supported</h1>
        <button onClick={this.handleClick}>Next to Review your Feedback Page</button>
      </div>
    )
  }
}

export default Supported;