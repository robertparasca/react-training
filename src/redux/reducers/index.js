import { combineReducers } from 'redux';

import authReducer from './auth';
import counterReducer from './counter';
import postsReducer from './posts';
import usersReducer from './users';

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
  posts: postsReducer,
  users: usersReducer
});