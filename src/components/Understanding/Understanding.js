import React, {Component} from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

  state = {
    understanding: ''
  }
  
  handleNextClick = () => {
    if (this.state.understanding == '') {
      //DONT GO ON
      alert('please fill out all fields')
    } else {
      //go to support
      // send info to redux
      // this.state.understanding == '4'
      this.props.dispatch(
        {
          type: 'SET_UNDERSTANDING',
          payload: this.state.understanding
        }
      )
    //go to understanding
    this.props.history.push('/support');
  }
}

  handleChange = (event) => {
    //save locally, temp. 
    this.setState({
      understanding: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label>Understanding?</label><br/>
        <input onChange={this.handleChange} />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    )
  }
}

export default connect()(Understanding);