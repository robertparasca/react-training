import { GET_POSTS, GET_POSTS_SUCCESS } from '../actionTypes';
import { takeEvery, put } from 'redux-saga/effects';

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function* getPostsAsync() {
  const data = yield getPosts();
  yield put({ type: GET_POSTS_SUCCESS, posts: data});
}

export function* watchGetPosts() {
  yield takeEvery(GET_POSTS, getPostsAsync);
}