// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLQw9_WupHvD5P8YAhjqkGMFbR670ZKgA",
  authDomain: "netflixgpt-adf93.firebaseapp.com",
  projectId: "netflixgpt-adf93",
  storageBucket: "netflixgpt-adf93.appspot.com",
  messagingSenderId: "21583872403",
  appId: "1:21583872403:web:62289f049f95165a37a866",
  measurementId: "G-LB3ZNZBBTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);