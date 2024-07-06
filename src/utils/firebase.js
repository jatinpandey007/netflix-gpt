// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTmNuB0AVzK8kTb3sBqgYtDL07XpMt76c",
  authDomain: "netflixgpt-d80b5.firebaseapp.com",
  projectId: "netflixgpt-d80b5",
  storageBucket: "netflixgpt-d80b5.appspot.com",
  messagingSenderId: "373040704905",
  appId: "1:373040704905:web:aeccdd394a897f7fb64558",
  measurementId: "G-F0WKL9JR2L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
