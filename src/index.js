import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterGroup from './component/CounterGroup';
import store from './store';
import { Provider } from 'react-redux'

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <Provider store = {store}>
    <CounterGroup
    />
  </Provider>,
  rootEl
)
render()
serviceWorker.unregister();
