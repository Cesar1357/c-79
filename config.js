import firebase from "firebase";
require("@firebase/firestore");
//import { collection, doc, setDoc } from "firebase/firestore";
//Pega tu configuración de firebase aquí

var firebaseConfig = {
    apiKey: "AIzaSyBMF6-RUbnXL9YLC8PyutwipLGBaiP8zI8",
    authDomain: "c-79-b92ee.firebaseapp.com",
    projectId: "c-79-b92ee",
    storageBucket: "c-79-b92ee.appspot.com",
    messagingSenderId: "405162912282",
    appId: "1:405162912282:web:84f4f75860fdaceaaa7fa3"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


