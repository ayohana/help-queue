import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';

const store = createStore(reducer);
// Create the redux store.

store.subscribe(() =>
  console.log(store.getState())
);
// Remember the subscribe() method that Redux provides? Generally, we won't use Redux's subscribe() or getState() in our "production" code, but it's excellent for testing. This is a great way to keep an eye on the current state of the store.

ReactDOM.render(
  <Provider store={store}> {/* pass in the Redux store as a prop of Provider component */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
