import { all, fork } from 'redux-saga/effects';

import { watchGetPosts } from './posts';
import { watchGetUsers } from './users';

export default function* rootSaga() {
  return yield all([
    fork(watchGetPosts),
    fork(watchGetUsers)
  ]);
};
