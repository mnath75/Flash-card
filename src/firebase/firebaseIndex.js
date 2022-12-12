//import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/app';
//import 'firebase/firestore';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA_CeqnTjIORuuHi5Q8j80UfM2DRprwEiQ",
  authDomain: "flashapplication-61774.firebaseapp.com",
  databaseURL: "https://flashapplication-61774-default-rtdb.firebaseio.com",
  projectId: "flashapplication-61774",
  storageBucket: "flashapplication-61774.appspot.com",
  messagingSenderId: "168585097117",
  appId: "1:168585097117:web:85042cc49ac23065268974"
};

const app=firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const db=firebase.firestore(app);
export const fb=firebase;

export default { firebaseConfig }