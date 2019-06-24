import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from '../actionTypes';

const initialState = {
  posts: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.posts
      };
    }
    case GET_POSTS_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
    default: 
      return state;
  }
}; 
