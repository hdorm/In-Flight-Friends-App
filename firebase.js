// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGcjltu5V_JpqpedE2fS0KirY39xjMTmQ",
  authDomain: "in-flight-friends-app.firebaseapp.com",
  projectId: "in-flight-friends-app",
  storageBucket: "in-flight-friends-app.appspot.com",
  messagingSenderId: "424633081193",
  appId: "1:424633081193:web:8fc57f0f22662a26dd71f8",
  measurementId: "G-RJPG26EM8M"
};

// Initialize Firebase
const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);