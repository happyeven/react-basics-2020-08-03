import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import CounterGroup from './component/CounterGroup';
import store from './store'

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
  <Provider store={store}><CounterGroup
    store = {store}
  /></Provider>,
  rootEl
)
render()
store.subscribe(render)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
