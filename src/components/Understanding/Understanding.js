import React, {Component} from 'react';

class Understanding extends Component {

  handleClick = () => {
    alert("You are headed to supported");
    ///CHANGE LOCATION???
    this.props.history.push('/Supported')
  }

  render() {
    return (
      <div>
        <h1>UNDERSTANDING</h1>
        <button onClick={this.handleClick}>Next Question about being supported</button>
      </div>
    )
  }
}

export default Understanding;