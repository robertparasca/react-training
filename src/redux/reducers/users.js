import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../actionTypes';

const initialState = {
  users: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        loading: false
      };
    }
    case GET_USERS_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
}