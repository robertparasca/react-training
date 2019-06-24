import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions/counter';

function Counter(props) {
  return (
    <div>
      <p>The value of the counter is: {props.counter.value}</p>
      <button onClick={() => props.increment(props.counter.value)}>Click me</button>
      <button onClick={() => props.decrement(props.counter.value)}>Or me</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);