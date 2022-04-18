// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUu9tjfoeQpInZbNKvchiCEiKAYFSv6A",
  authDomain: "car-service-98542.firebaseapp.com",
  projectId: "car-service-98542",
  storageBucket: "car-service-98542.appspot.com",
  messagingSenderId: "602337242196",
  appId: "1:602337242196:web:69e6ba9b46a7b81f9f11c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
