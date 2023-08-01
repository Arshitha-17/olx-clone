import firebase from "firebase";

import 'firebase/auth';
import 'firebase/firebase';

import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc6GORUxfQVgNeUd0dK_qzNPzyX8wgMCE",
    authDomain: "olx-apps-c6565.firebaseapp.com",
    projectId: "olx-apps-c6565",
    storageBucket: "olx-apps-c6565.appspot.com",
    messagingSenderId: "11905063266",
    appId: "1:11905063266:web:0edc92a2c7a8432b49343b",
    measurementId: "G-92MP4DXLPY"
  };  
export default firebase.initializeApp(firebaseConfig)