import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './Layouts/app';
import reducers from './Redux/reducers';

const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('app'));

if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./Redux/reducers', () => {
    store.replaceReducer(require('./Redux/reducers').default);
  });
}
