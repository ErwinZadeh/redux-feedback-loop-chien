import React, { Component } from 'react';

class Supported extends Component {

  handleClick = () => {
    // alert('you are headed to leave comments');
    ///CHANGE LOCATION???
    this.props.history.push('/Comments')
  }

  render() {
    return (
      <div>
        <h1>How well are you being Supported?</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Supported;