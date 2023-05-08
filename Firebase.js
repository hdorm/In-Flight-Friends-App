//Necessary Imports
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set, onValue} from "firebase/database";
import React from "react";

// Const to hold information about the app and Firebase database
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

// Creates a Firebase instance for the current chat session
initializeApp(firebaseapp);

// Creates a new user ID
const userId = Math.floor(Math.random() * 1000000000);

// Variable to store the user's avatar
let user_avatar;

// Gets called on the welcome screen when the user selects an avatar to store their selection
function writeUserData(avatar) {
    user_avatar = avatar;
}

// Gets called when a user sends a chat and stores their message content and information
function writeToChatroom(message) {
    const database = getDatabase();
    const reference = ref(database, 'chatroom/');
    set(reference, {
        message: message
    }).then(() => {
        console.log(message)
    });
}

// Retrieves information already sent in the current chat room
function getChatroomData() {
    const database = getDatabase();
    const reference = ref(database, 'chatroom/');
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

// Returns the user's ID when called
function getUserId() {
    return userId;
}

// Returns the user's avatar when called
function getUserAvatar() {
    return user_avatar;
}

// Exports the Firebase.js for use
export {firebaseapp, writeUserData, getUserAvatar, writeToChatroom, getChatroomData, getUserId};