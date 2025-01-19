import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo2NJwQoU67_YN_OGlEddLcWMaYjErANM",
  authDomain: "star-wars-danilly.firebaseapp.com",
  projectId: "star-wars-danilly",
  storageBucket: "star-wars-danilly.firebasestorage.app",
  messagingSenderId: "816756617332",
  appId: "1:816756617332:web:6bbd10312c4524ce5c6121",
  measurementId: "G-8L7HVLQPQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};