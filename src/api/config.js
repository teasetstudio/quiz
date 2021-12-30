// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6WDAV55dJioU8Fd4RFRq-g3pKLAUA9t0",
  authDomain: "sunday-5fbb2.firebaseapp.com",
  projectId: "sunday-5fbb2",
  storageBucket: "sunday-5fbb2.appspot.com",
  messagingSenderId: "710629797708",
  appId: "1:710629797708:web:672ae81bd0cd3e2ae4e9e9",
  measurementId: "G-253C0M6WJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);