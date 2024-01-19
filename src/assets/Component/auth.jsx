// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgKCZ3dsMzqGzLNHDaGNSzcm3WQeMLIo",
  authDomain: "e-commerce-9c711.firebaseapp.com",
  projectId: "e-commerce-9c711",
  storageBucket: "e-commerce-9c711.appspot.com",
  messagingSenderId: "528028061482",
  appId: "1:528028061482:web:05723faaede0ac96599853",
  measurementId: "G-7V13CWL32X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);