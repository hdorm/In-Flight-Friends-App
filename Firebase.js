import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import React, { useState } from "react";

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

var userId = Math.floor(Math.random() * 1000000000);

function writeUserData(emoji) {
  const database = getDatabase();
  const reference = ref(database, 'users/' + userId);
  set(reference, {
      userId: userId,
      user_emoji: emoji
  });
}

function getUserId(){
  const user = firebase.auth().currentUser;
  return user.userId;
}

function getUserEmoji() {
  const database = getDatabase();
  const reference = ref(database, 'users/user_emoji');
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

function writeToChatroom(message) {
  const database = getDatabase();
  const reference = ref(database, 'chatroom/');
  set(reference, {
    message: message
  });
}

function getChatroomData() {
  const database = getDatabase();
  const reference = ref(database, 'chatroom/');
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

export { firebaseapp, writeUserData, getUserEmoji, writeToChatroom, getChatroomData, getUserId };