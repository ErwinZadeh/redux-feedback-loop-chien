import React, {Component} from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

  state = {
    understanding: 0,
  };

  // state = {
  //   feedback: {
  //       feeling: 0,
  //       understanding: 0,
  //       support: 0,
  //       comments: ''
  //   },
  // };

  handleUnderstandingingChange = (event) => {
    console.log(event.target.value);
    this.setState({
      understanding: event.target.value
    },
  );
}
  
  // handleUnderstandingChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //       feedback: {
  //           ...this.state.understanding,
  //           understanding: event.target.value
  //       },
  //   });
  // }
  
  handleClick = () => {
    console.log(this.state)
    // alert("You are headed to supported");
    ///CHANGE LOCATION???
    this.props.history.push('/Support')
    this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <input onChange={this.handleUnderstandingChange} type="number" placeholder="Choose between 1 to 5" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Understanding;