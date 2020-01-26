import React, {Component} from 'react';

class Home extends Component {

  handleClick = () => {
    // alert("You are headed to understanding");
    ///CHANGE LOCATION???
    this.props.history.push('/Understanding')
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Home;