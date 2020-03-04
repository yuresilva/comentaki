import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQvlY0HEW8-T388sqfZ42enPc4TCbfSbw",
  authDomain: "my-project-1557863547518.firebaseapp.com",
  databaseURL: "https://my-project-1557863547518.firebaseio.com",
  projectId: "my-project-1557863547518",
  storageBucket: "my-project-1557863547518.appspot.com",
  messagingSenderId: "935137245496",
  appId: "1:935137245496:web:9c243664646512e4f829cd"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
