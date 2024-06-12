// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b4742.firebaseapp.com",
  projectId: "mern-blog-b4742",
  storageBucket: "mern-blog-b4742.appspot.com",
  messagingSenderId: "273999153877",
  appId: "1:273999153877:web:dc63c665bfcfaa7f4d305c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

