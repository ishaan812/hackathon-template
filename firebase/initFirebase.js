// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBk3duj3Tsb48BkV_ymbz0UDPLur9oZ3k",
  authDomain: "codeshastra-fb937.firebaseapp.com",
  projectId: "codeshastra-fb937",
  storageBucket: "codeshastra-fb937.appspot.com",
  messagingSenderId: "600741019295",
  appId: "1:600741019295:web:a52f5d8e93ab0889aa6caa",
  measurementId: "G-S2DBLEY0CY"
};

// Initialize Firebase
const firebase=initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
export default firebase
