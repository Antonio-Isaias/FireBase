import firebase from "firebase/app";
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCRwNnjogo6_DN6-cN63OVxECVoe_1i4Gg",
    authDomain: "pam-aula01.firebaseapp.com",
    databaseURL: "https://pam-aula01-default-rtdb.firebaseio.com",
    projectId: "pam-aula01",
    storageBucket: "pam-aula01.appspot.com",
    messagingSenderId: "948472363759",
    appId: "1:948472363759:web:81065c9a69efca2a25f91a",
    measurementId: "G-L77H9FYHK4"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;