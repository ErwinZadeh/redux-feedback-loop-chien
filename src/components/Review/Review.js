import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {


  handleSubmit = () => {
    // Send to our server -- 
    // Our needed to send data is in reduxState as (this.props.feedback) 
    axios.post('/feedback', this.props.feedback)
      .then(response => {
        alert('All done!');
        
      })
      .catch( error => {
        alert(`Couldn't submit responses at this time`);
        console.log('Error posting to feedback', error);
      })

    this.props.history.push('/thankyou');
  }

render() {
    return (
      <div>
        <h2>Feedback Review</h2>
        {/* //SEE WHAT WE'VE TYPED BEFORE ON OTHER PAGES */}

        {/* {JSON.stringify(this.props.feedback)}<br/> */}
        
        <table>
            <thead>
              <tr>
                <th>Feeling Score</th>
                <th>Comprehension</th>
                <th>Support by Staffs</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody className="feedback">
                <tr key={Date.now()}>
                    <td>{this.props.feedback.feeling}</td>
                    <td>{this.props.feedback.understanding}</td>
                    <td>{this.props.feedback.support}</td>
                    <td>{this.props.feedback.comments}</td>
                  </tr>
            </tbody> 
        </table>


        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}


const putReduxStateOnProps = (reduxState) => ({
  feedback: reduxState.feedback 
});

export default connect(putReduxStateOnProps)(Review);