import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './modules/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';
import DevTools from './utils/DevTools';


const enhancer = () => {
  if (process.env.NODE_ENV === 'production') {
      return compose(
        applyMiddleware(thunk),
    );
  } else {
      return compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    );
  }
}

const store = createStore(
  reducer,
  enhancer(),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
