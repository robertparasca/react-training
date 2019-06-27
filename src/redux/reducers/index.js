import { combineReducers } from 'redux';
import counterReducer from './counter';
import postsReducer from './posts';
import usersReducer from './users';

export default combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  users: usersReducer
});