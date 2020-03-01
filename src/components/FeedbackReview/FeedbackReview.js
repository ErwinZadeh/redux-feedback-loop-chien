import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class FeedbackReview extends Component {



  handleSubmit = () => {
    // Send to our server -- wheres our data???
    axios.post('/feedback', this.props.feedback)
      .then(response => {
        alert('All done!');
        this.props.history.push('/');
      })
    // then confirm, move us back to the beginning...something
  }

render() {
    return (
      <div>
        <h2>Feedback Review</h2>
        {/* //SEE WHAT WE'VE TYPED BEFORE ON OTHER PAGES */}
        {JSON.stringify(this.props.feedback)}
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}


const mapStateToProps = (reduxState) => {
  // put this on this.props please
  return {
    feedback: reduxState.feedback
  }
}

export default connect(mapStateToProps)(FeedbackReview);