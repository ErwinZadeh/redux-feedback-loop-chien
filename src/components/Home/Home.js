import React, {Component} from 'react';

class Home extends Component {

  state = {
    feedback: {
        feeling: 0,
        understanding: 0,
        supported: 0,
        comments: ''
    },
  };

  handleFeelingChange = (event) => {
    console.log(event.target.value);
    this.setState({
        feedback: {
            ...this.state.feeling,
            felling: event.target.value
        },
    });
  }

  handleClick = () => {
    console.log(this.state)
    // alert("You are headed to understanding");
    ///CHANGE LOCATION???
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

export default Home;