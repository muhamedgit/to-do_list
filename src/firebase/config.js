// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDQdJcXkiRCKA9aFpXbWtPWoezbrGqCpnc',
  authDomain: 'very-usefull-to-do-list.firebaseapp.com',
  projectId: 'very-usefull-to-do-list',
  storageBucket: 'very-usefull-to-do-list.appspot.com',
  messagingSenderId: '327501538956',
  appId: '1:327501538956:web:ed4f117fcceff88d64fda9',
  measurementId: 'G-04D6D5ZFP5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
