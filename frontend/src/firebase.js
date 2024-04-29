// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-99c01.firebaseapp.com",
  projectId: "mern-auth-99c01",
  storageBucket: "mern-auth-99c01.appspot.com",
  messagingSenderId: "120067259138",
  appId: "1:120067259138:web:5d861239712945ace4201b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);