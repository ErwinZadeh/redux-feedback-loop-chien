import React, {Component} from 'react';

class Comments extends Component {

  state = {
    comments: 0,
  };

  handleCommentsChange = (event) => {
    console.log(event.target.value);
    this.setState({
      comments: event.target.value
    },
  );
}

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
    // alert('you are headed to feedback review before submiting!');
    ///CHANGE LOCATION???
    this.props.history.push('/FeedbackReview')
    this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
  }

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleCommentsChange} type="text" placeholder="Write your comment" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Comments;