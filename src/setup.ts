// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpNW4y3jENwllOQqAxPdImKYbUhz5VMew",
  authDomain: "reskill-learning.firebaseapp.com",
  projectId: "reskill-learning",
  storageBucket: "reskill-learning.appspot.com",
  messagingSenderId: "218617641258",
  appId: "1:218617641258:web:cc1deba78b31e3b3328653",
  measurementId: "G-R7HQTDDETY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
