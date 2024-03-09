import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX34R35qhMAH6nX-j1kwL_wNsIL3dFCqM",
  authDomain: "authreact-7047f.firebaseapp.com",
  projectId: "authreact-7047f",
  storageBucket: "authreact-7047f.appspot.com",
  messagingSenderId: "233579709337",
  appId: "1:233579709337:web:10908d185688c4633b0908",
  // measurementId: "G-KTGBXBZ1W3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, storage, auth, provider };
