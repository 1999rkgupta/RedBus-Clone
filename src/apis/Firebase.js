// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYb1K9RURnxl6SqbXk5hq2Pes6Z0QgIcc",
  authDomain: "redbus-clone-e3e86.firebaseapp.com",
  projectId: "redbus-clone-e3e86",
  storageBucket: "redbus-clone-e3e86.appspot.com",
  messagingSenderId: "689560479549",
  appId: "1:689560479549:web:53464befb0b9d5539b8754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let auth = getStorage(firebaseConfig);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);
export default firebaseApp;