import React, {Component} from 'react';

class Comments extends Component {

  handleClick = () => {
    // alert('you are headed to feedback review before submiting!');
    ///CHANGE LOCATION???
    this.props.history.push('/FeedbackReview')
  }

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Comments;