import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
import storeJS from "store-js";

//Save to localStorage
const saveToLocalStorage = (state) => {
  //depending on the browser settings (i.e privacy mode) it wont store to local storage so we need to catch the error
  try {
      const serializedState = JSON.stringify(state);
      storeJS.set('state', serializedState)

      //localStorage.setItem('state', serializedState);
  } catch (e) {
      console.log(e)
  }
}

//every time store changes update localstorage
store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
