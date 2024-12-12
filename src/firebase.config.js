// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuF9E3BJC2wqiT-BykW3_Zrn3RgqOpnnQ",
  authDomain: "mrliem-f72fd.firebaseapp.com",
  projectId: "mrliem-f72fd",
  storageBucket: "mrliem-f72fd.appspot.com",
  messagingSenderId: "379494468949",
  appId: "1:379494468949:web:11ae090521309b277933dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)

export default app