// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgtoAPLgjBWHv_yPHfEQjlU3LgGKxqU3o",
  authDomain: "funimationbd.firebaseapp.com",
  projectId: "funimationbd",
  storageBucket: "funimationbd.appspot.com",
  messagingSenderId: "495378424811",
  appId: "1:495378424811:web:6c8b4aacf1ceb8125bafae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
