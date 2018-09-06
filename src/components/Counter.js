import React, { Component } from 'react'
import { connect } from "react-redux";
import {increment, increment_amount, decrement, zero} from "../redux/index"

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>        
        <button onClick = { () => this.props.increment() }> Increment </button>
        <button onClick = { () => this.props.increment_amount(10) }> Increment Amount 10</button>
        <button onClick = { () => this.props.increment_amount(20) }> Increment Amount 20</button>
        <button onClick = { () => this.props.zero() }> Zero </button>
        <button onClick = { () => this.props.decrement() }> Decrement </button>                
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increment, 
  increment_amount,
  decrement, 
  zero
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);