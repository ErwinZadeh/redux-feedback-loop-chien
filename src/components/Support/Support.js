import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support: 0,
  };
  
  handleSupportChange = (event) => {
    console.log(event.target.value);
    this.setState({
      support: event.target.value
    },
  );
}
  
  handleClick = () => {
    // alert('you are headed to leave comments');
    ///CHANGE LOCATION???
    this.props.history.push('/Comments')
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
  }

  render() {
    return (
      <div>
        <h1>How well are you being Supported?</h1>
        <input onChange={this.handleSupportedChange} type="number" placeholder="Choose between 1 to 5" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Support;