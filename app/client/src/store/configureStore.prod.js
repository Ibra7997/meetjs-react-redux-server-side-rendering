import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunk, promise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
