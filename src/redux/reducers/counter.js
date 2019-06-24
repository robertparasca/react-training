import { INCREMENT, DECREMENT } from '../actionTypes';

const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: action.payload
      };
    }
    case DECREMENT: {
      return {
        ...state,
        value: action.payload
      };
    }
    default: 
      return state;
  }
};