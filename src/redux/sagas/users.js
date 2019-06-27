import { takeEvery, put } from 'redux-saga/effects';
import { GET_USERS, GET_USERS_SUCCESS } from '../actionTypes';


function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
}

function* getusersAsync() {
  const data = yield getUsers();
  yield put({ type: GET_USERS_SUCCESS, users: data })
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS, getusersAsync);
}