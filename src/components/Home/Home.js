import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  state = {
    feeling: 0,
  };

  handleFeelingChange = (event) => {
    console.log(event.target.value);
    this.setState({
      feeling: event.target.value
    },
  );
}

handleClick = () => {
  console.log(this.state)
  // alert("You are headed to understanding");
  //CHANGE LOCATION???
  this.props.history.push('/Understanding')
  this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
}

// addFeeling = () => {
//   console.log(this.props.feeling);

//       this.props.dispatch({
//           type: 'ADD_FEELING',
//           payload: this.props.feeling
//       })
// }

render() {
  return (
    <div>
      <h1>How are you feeling today?</h1>
      <input onChange={this.handleFeelingChange} type="number" placeholder="Choose between 1 to 5" />
      <button onClick={this.handleClick}>NEXT</button>
      {/* <button onClick={() => this.props.dispatch(
          {
            type: 'ADD_FEELING',
            payload: this.state.feeling
          }
        )
        }
        >
          NEXT
        </button> */}
    </div>
  )
}
}

const putReduxStateOnProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(putReduxStateOnProps)(Home);

// export default Home;
