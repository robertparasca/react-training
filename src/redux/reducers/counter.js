import { INCREMENT, DECREMENT, INIT_COUNTER } from '../actionTypes';

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
    case INIT_COUNTER: {
      return initialState;
    }
    default: 
      return state;
  }
};