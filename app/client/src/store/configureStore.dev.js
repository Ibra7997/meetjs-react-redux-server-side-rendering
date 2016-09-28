import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from '../reducers';


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line no-undef
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers'); // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
