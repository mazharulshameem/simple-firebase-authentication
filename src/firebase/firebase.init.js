// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9aSAXt7Rl4oNeVvdS_Z6AeP4cKObq1T8",
  authDomain: "react-firebase-authentic-af01c.firebaseapp.com",
  projectId: "react-firebase-authentic-af01c",
  storageBucket: "react-firebase-authentic-af01c.appspot.com",
  messagingSenderId: "1057210199066",
  appId: "1:1057210199066:web:080ab1757fe167b63cb5a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
