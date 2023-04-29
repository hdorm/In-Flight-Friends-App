import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseapp = {
  apiKey: "AIzaSyAGcjltu5V_JpqpedE2fS0KirY39xjMTmQ",
  authDomain: "in-flight-friends-app.firebaseapp.com",
  databaseURL: "https://in-flight-friends-app-default-rtdb.firebaseio.com",
  projectId: "in-flight-friends-app",
  storageBucket: "in-flight-friends-app.appspot.com",
  messagingSenderId: "424633081193",
  appId: "1:424633081193:web:8fc57f0f22662a26dd71f8",
  measurementId: "G-RJPG26EM8M"
};

const app = initializeApp(firebaseapp);

function writeUserData(emoji) {
  const userId = Math.floor(Math.random() * 1000000000);
  const database = getDatabase();
  const reference = ref(database, 'users/' + userId);
  set(reference, {
      userId: userId,
      user_emoji: emoji
  });
}

// Reference users collection
// var usersDB = firebase.database().ref('users');

// // Listen for form submit
// document.getElementById('ContinueButton_WelcomeScreen').addEventListener('continue', submitEmoji);

// function submitEmoji(e){
//   e.preventDefault();

//   // Get values
//   var emoji = getInputVal('ContinueButton_WelcomeScreen');
  
//   // Generate a unique ID for each user
//   var newUserId = usersDB.push().key;

//   firebase.database().ref('users/' + newUserId).set({
//     userId: newUserId,
//     user_emoji: emoji
//   });

//   console.log(newUserId, emoji);

// }

export { firebaseapp, writeUserData };