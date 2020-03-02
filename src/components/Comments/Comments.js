import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

  state = {
    comments: ''
  }

  handleNextClick = () => {

    if (this.state.comments == '') {
      //DONT GO ON
      alert('please fill out all fields')
    } else {
      //go to support
      // send info to redux
      // this.state.comments == for example: 'This is it!'
      this.props.dispatch(
        {
          type: 'SET_COMMENTS',
          payload: this.state.comments
        }
      )

      this.props.history.push('/Review');
    }

  }

  handleChange = (event) => {
    //save locally, temp. 
    this.setState({
      comments: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Anycomments you want to leave?</h2>
        <label>Comments?</label><br/>
        <input onChange={this.handleChange} />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    )
  }
}

export default connect()(Comments);