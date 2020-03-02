import React, {Component} from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support: ''
  }

  handleNextClick = () => {

    if (this.state.support == '') {
      //DONT GO ON
      alert('please fill out all fields')
    } else {
      //go to support
      // send info to redux
      // this.state.support == for example: '4'
      this.props.dispatch(
        {
          type: 'SET_SUPPORT',
          payload: this.state.support
        }
      )

      this.props.history.push('/comments');
    }

  }

  handleChange = (event) => {
    //save locally, temp. 
    this.setState({
      support: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>How well are you supported?</h2>
        <label>Support?</label><br/>
        <input onChange={this.handleChange} />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    )
  }
}

export default connect()(Support);