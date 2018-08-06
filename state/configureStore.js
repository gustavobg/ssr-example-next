import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initialState } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState) {
  const store = createStore(
    rootReducer,
    state,
    bindMiddleware([sagaMiddleware]),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
