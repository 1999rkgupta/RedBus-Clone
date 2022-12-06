import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBYb1K9RURnxl6SqbXk5hq2Pes6Z0QgIcc",
  authDomain: "redbus-clone-e3e86.firebaseapp.com",
  projectId: "redbus-clone-e3e86",
  storageBucket: "redbus-clone-e3e86.appspot.com",
  messagingSenderId: "689560479549",
  appId: "1:689560479549:web:53464befb0b9d5539b8754"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let auth =getAuth(firebaseApp)
export let db=getFirestore(firebaseApp)
export let storage=getStorage(firebaseApp)

export default firebaseApp