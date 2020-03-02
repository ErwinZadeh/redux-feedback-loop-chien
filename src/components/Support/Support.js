import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support: 0,
  };

  handleSupportChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      support: event.target.value
    },
    );
  }

  handleSupportClick = () => {
    console.log(this.state)
    // alert("You are headed to supported");
    ///CHANGE LOCATION???
    this.props.history.push('/Comments')
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
  }

  render() {
    return (
      <div>
        <h1>How well are you being Supported?</h1>
        <input onChange={this.handleSupportChange} type="number" placeholder="Choose between 1 to 5" />
        <button onClick={this.handleSupportClick}>NEXT</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => {
  return {
    reduxState
  }
}

export default Support;
// export default Support;