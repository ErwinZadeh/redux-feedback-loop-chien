import React, {Component} from 'react';

class Home extends Component {

  handleClick = () => {
    alert("You are headed to understanding");
    ///CHANGE LOCATION???
    this.props.history.push('/Understanding')
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <button onClick={this.handleClick}>Next Question about Understanding</button>
      </div>
    )
  }
}

export default Home;