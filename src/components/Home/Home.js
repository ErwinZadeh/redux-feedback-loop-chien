import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  state = {
    feedback: {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    },
  };

  handleFeelingChange = (event) => {
    console.log(event.target.value);
    this.setState({
        feedback: {
            ...this.state.feeling,
            feeling: event.target.value
        },
    });
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
    // console.log(this.props.feeling);
    //     this.props.dispatch({
    //         type: 'ADD_FEELING',
    //         payload: this.props.feeling
    //     })
    console.log(this.state)
    alert("You are headed to understanding");
    //CHANGE LOCATION???
    this.props.history.push('/Understanding')
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleFeelingChange} type="number" placeholder="Choose between 1 to 5" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

// const putReduxStateOnProps = (reduxState) => {
//   //this will make this.props.reduxState a thing
//   return {
//     reduxState
//   }
// }

export default Home;
//this gives us secret props!
// export default connect(putReduxStateOnProps)(Home);
