// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR KEY HERE",
  authDomain: "YOUR PROJECT DOMAINS",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR PROJECT STORAGE",
  messagingSenderId: "YOUR ID",
  appId: "YOUR ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
