import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKBnu19ST9UU1uitaWH2AcZ822Cv4VrcU",
  authDomain: "haptik-task.firebaseapp.com",
  projectId: "haptik-task",
  storageBucket: "haptik-task.appspot.com",
  messagingSenderId: "747679794810",
  appId: "1:747679794810:web:253fb2c445049a208c5dc3",
  measurementId: "G-83RPK9DVL2"
};
firebase.initializeApp(firebaseConfig);
console.log("firebase connected");
export const firestore = firebase.firestore();
