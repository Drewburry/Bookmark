import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8N-AXUxBWbzoWv6G3LDb6d9iBmpXVam8",
    authDomain: "loginapp-a925d.firebaseapp.com",
    projectId: "loginapp-a925d",
    storageBucket: "loginapp-a925d.appspot.com",
    messagingSenderId: "947702302867",
    appId: "1:947702302867:web:a2e4ba1c76655923f4a566",
    measurementId: "G-5TJD2269BP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export {firebase}