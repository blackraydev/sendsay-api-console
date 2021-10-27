import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistAuthConfig = {
  key: 'root',
  storage,
};

const persistRequestConfig = {
  key: 'request',
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedAuthReducer = persistReducer(persistAuthConfig, rootReducer.auth);
const persistedRequestReducer = persistReducer(persistRequestConfig, rootReducer.request);
const reducer = combineReducers({ persistedAuthReducer, persistedRequestReducer });

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (initialState = {}) => {
  const store = createStore<any, any, any, any>(reducer, initialState, bindMiddleware([sagaMiddleware]));
  let persistor = persistStore(store);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return {
    store,
    persistor,
  };
};

export default configureStore;

export type RootState = ReturnType<typeof reducer>;
