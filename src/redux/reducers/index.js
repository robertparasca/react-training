import { combineReducers } from 'redux';
import counterReducer from './counter';
import postsReducer from './posts';

export default combineReducers({
  counter: counterReducer,
  posts: postsReducer
});