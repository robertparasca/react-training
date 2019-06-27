import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { increment, decrement } from '../redux/actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter, shallowEqual);

  return (
    <div>
      <p>The value of the counter is: {counterState.value}</p>
      <button onClick={() => dispatch(increment(counterState.value))}>Click me</button>
      <button onClick={() => dispatch(decrement(counterState.value))}>Or me</button>
    </div>
  );
};

export default Counter;