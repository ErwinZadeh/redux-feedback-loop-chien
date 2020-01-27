import React, {Component} from 'react';

class Understanding extends Component {

  state = {
    feedback: {
        feeling: 0,
        understanding: 0,
        supported: 0,
        comments: ''
    },
  };

  handleUnderstandingChange = (event) => {
    console.log(event.target.value);
    this.setState({
        feedback: {
            ...this.state.understanding,
            understanding: event.target.value
        },
    });
  }
  
  handleClick = () => {
    // alert("You are headed to supported");
    ///CHANGE LOCATION???
    this.props.history.push('/Supported')
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