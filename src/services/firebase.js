import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

//const firebaseConfig = {
//    apiKey: process.env.REACT_APP_API_KEY,
//    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//    databaseURL: process.env.REACT_APP_DATABASE_URL,
//    projectId: process.env.REACT_APP_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//    appId: process.env.REACT_APP_APP_ID,
//  };


const firebaseConfig = {
  apiKey: "AIzaSyB53FbqUhZLJ7e3d16LiH-X5paPivO__Kw",
  authDomain: "letmeask-aulas-b4c11.firebaseapp.com",
  databaseURL: "https://letmeask-aulas-b4c11-default-rtdb.firebaseio.com",
  projectId: "letmeask-aulas-b4c11",
  storageBucket: "letmeask-aulas-b4c11.appspot.com",
  messagingSenderId: "187770863718",
  appId: "1:187770863718:web:8cfca475b35fe3d0f9eda7"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}