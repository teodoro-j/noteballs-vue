import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXTyMaJFopTU-xW2DKM_vpJyO7qa-Ko4E",
  authDomain: "noteballs-8ff45.firebaseapp.com",
  projectId: "noteballs-8ff45",
  storageBucket: "noteballs-8ff45.appspot.com",
  messagingSenderId: "538466941158",
  appId: "1:538466941158:web:92402fc1fdfbe609b12327",
  measurementId: "G-RXV43YLB6F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth,
}