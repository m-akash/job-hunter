// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW3FIxH_FQ7AW9aPi6yVYdXKuQ7qqL8Fs",
  authDomain: "hire-hub-823a0.firebaseapp.com",
  projectId: "hire-hub-823a0",
  storageBucket: "hire-hub-823a0.firebasestorage.app",
  messagingSenderId: "806191595417",
  appId: "1:806191595417:web:4cabe4cd49b42a5ffa9d08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
