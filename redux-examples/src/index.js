import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-2/app';
import store from './app-2/app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

