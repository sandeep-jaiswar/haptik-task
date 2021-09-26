import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAKBnu19ST9UU1uitaWH2AcZ822Cv4VrcU",
  authDomain: "haptik-task.firebaseapp.com",
  projectId: "haptik-task",
  storageBucket: "haptik-task.appspot.com",
  messagingSenderId: "747679794810",
  appId: "1:747679794810:web:253fb2c445049a208c5dc3",
  measurementId: "G-83RPK9DVL2"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase();
console.log("firebase connected");
export default app;
