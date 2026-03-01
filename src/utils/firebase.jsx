// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbLD1c7u_JXNGQRExSyAXKsMPKUBAH_wY",
  authDomain: "apknetflix-1668f.firebaseapp.com",
  projectId: "apknetflix-1668f",
  storageBucket: "apknetflix-1668f.firebasestorage.app",
  messagingSenderId: "788449782482",
  appId: "1:788449782482:web:9da0f3154c1e07ca8f1b0b",
  measurementId: "G-472PV7PPWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
