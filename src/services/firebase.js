import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCe5FY4XqcFgCxba2RqwYcN4KcZ6Lpt_Hc",
  authDomain: "plataformacommaria.firebaseapp.com",
  databaseURL: "https://plataformacommaria.firebaseio.com",
  projectId: "plataformacommaria",
  storageBucket: "plataformacommaria.appspot.com",
  messagingSenderId: "711465889253",
  appId: "1:711465889253:web:ab979cce1de72a94c1d30c",
  measurementId: "G-W5ZRVPQ6B7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
