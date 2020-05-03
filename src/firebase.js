// Initial configuration for Firebase
// Also creates a reference to our cloud database

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

firebase.initializeApp(firebaseConfig); // initializes Firebase with our unique Firebase config
firebase.firestore(); // set up our Firebase to use Firestore

export default firebase; // export our Firebase + Firestore to make it available elsewhere in our app