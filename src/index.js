import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterGroup from './component/CounterGroup';
import store from './store';

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <CounterGroup
  />,
  rootEl
)
render()
store.subscribe(render)
serviceWorker.unregister();
