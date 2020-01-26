import React, {Component} from 'react';

class Understanding extends Component {

  handleClick = () => {
    // alert("You are headed to supported");
    ///CHANGE LOCATION???
    this.props.history.push('/Supported')
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Understanding;