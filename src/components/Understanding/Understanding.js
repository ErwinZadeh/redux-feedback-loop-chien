import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

  state = {
    understanding: 0,
  };

  handleUnderstandingChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      understanding: event.target.value
    },
    );
  }

  handleUnderstandingClick = () => {
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
        <button onClick={this.handleUnderstandingClick}>NEXT</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(putReduxStateOnProps)(Understanding);


// export default Understanding;