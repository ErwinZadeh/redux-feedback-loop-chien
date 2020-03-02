import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

  state = {
    feeling: ''
  }

  handleNextClick = () => {

    if (this.state.feeling == '') {
      //DONT GO ON
      alert('please fill out all fields')
    } else {
      //go to understanding
      // send info to redux
      // this.state.feeling == '4'
      this.props.dispatch(
        {
          type: 'SET_FEELING',
          payload: this.state.feeling
        }
      )

      this.props.history.push('/understanding');
    }

  }

  handleChange = (event) => {
    //save locally, temp. 
    this.setState({
      feeling: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label>Feeling?</label><br/>
        <input onChange={this.handleChange} />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    )
  }
}

export default connect()(Feeling);