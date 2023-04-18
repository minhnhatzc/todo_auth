// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGo092_3eNqwxyD4ZPfnOSxrLyN8pfgRw",
  authDomain: "todo-app-5ce4b.firebaseapp.com",
  projectId: "todo-app-5ce4b",
  storageBucket: "todo-app-5ce4b.appspot.com",
  messagingSenderId: "83254467994",
  appId: "1:83254467994:web:c90ddf1f263d6b2e92ae23",
  measurementId: "G-Q1J2MT3S6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
