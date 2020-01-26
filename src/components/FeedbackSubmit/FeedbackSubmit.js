import React, {Component} from 'react';

class FeedbackSubmit extends Component {

  handleClick = () => {
    // alert('you come back to home page!');
    //Change Location"
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Feedback!</h1>
        <h1>Thank You!</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default FeedbackSubmit;