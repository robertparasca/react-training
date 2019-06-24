import { all, fork } from 'redux-saga/effects';

import { watchGetPosts } from './posts';

export default function* rootSaga() {
  return yield all([
    fork(watchGetPosts)
  ]);
};
