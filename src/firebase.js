// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA25r-n78i0zGT439DCVfhI8F4Al9yTHyc",
  authDomain: "germinahapp.firebaseapp.com",
  projectId: "germinahapp",
  storageBucket: "germinahapp.firebasestorage.app",
  messagingSenderId: "298495461885",
  appId: "1:298495461885:web:ed66661f6c351191a83194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };