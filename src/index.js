import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './reducers/ticket-list-reducer';
import rootReducer from './reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import 'firebase/auth';

const store = createStore(rootReducer);
// Create the redux store with the rootReducer

const rrfProps = {
  firebase,
  config: {
        userProfile: "users", // simply states that any data on users will be stored in a collection called "users"
        useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

// store.subscribe(() =>
//   console.log(store.getState())
// );
// Remember the subscribe() method that Redux provides? Generally, we won't use Redux's subscribe() or getState() in our "production" code, but it's excellent for testing. This is a great way to keep an eye on the current state of the store.

ReactDOM.render(
  <Provider store={store}> {/* provides the Redux store context */}
    <ReactReduxFirebaseProvider {...rrfProps}> {/* provides Firebase and Firestore context */}
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
