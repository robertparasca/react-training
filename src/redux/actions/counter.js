import { INCREMENT, DECREMENT,INIT_COUNTER } from '../actionTypes';

export const increment = (value) => ({
  type: INCREMENT,
  payload: value + 1
});

export const decrement = (value) => ({
  type: DECREMENT,
  payload: value - 1
});

export const initCounter = () => ({
  type: INIT_COUNTER
});
