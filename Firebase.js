import { getDatabase, set, ref } from "firebase/database";
import firebase from 'firebase/app';
import { getAuth } from "firebase/auth";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

class Firebase{
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    Firebase.initializeApp({
      apiKey: "AIzaSyAGcjltu5V_JpqpedE2fS0KirY39xjMTmQ",
      authDomain: "in-flight-friends-app.firebaseapp.com",
      projectId: "in-flight-friends-app",
      databaseURL: "https://in-flight-friends-app-default-rtdb.firebaseio.com/",
      storageBucket: "in-flight-friends-app.appspot.com",
      messagingSenderId: "424633081193",
      appId: "1:424633081193:web:8fc57f0f22662a26dd71f8",
      measurementId: "G-RJPG26EM8M"    
    });
  }

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  writeUserData(userId, name, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      profile_picture : imageUrl
    });
  }


  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  }

  on = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }

}

Firebase.shared = new Firebase();
export default Firebase;