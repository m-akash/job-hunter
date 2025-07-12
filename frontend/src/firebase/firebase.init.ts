// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface ViteEnv {
  VITE_apiKey: string;
  VITE_authDomain: string;
  VITE_projectId: string;
  VITE_storageBucket: string;
  VITE_messagingSenderId: string;
  VITE_appId: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: (import.meta.env as unknown as ViteEnv).VITE_apiKey,
  authDomain: (import.meta.env as unknown as ViteEnv).VITE_authDomain,
  projectId: (import.meta.env as unknown as ViteEnv).VITE_projectId,
  storageBucket: (import.meta.env as unknown as ViteEnv).VITE_storageBucket,
  messagingSenderId: (import.meta.env as unknown as ViteEnv).VITE_messagingSenderId,
  appId: (import.meta.env as unknown as ViteEnv).VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
