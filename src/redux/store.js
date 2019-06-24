import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const middlewares = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)));

const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;