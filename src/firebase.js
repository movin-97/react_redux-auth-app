import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCz1M3O3d7OmBtVoZUQj0MK4sS80qGcbOc",
  authDomain: "react-redux-auth-c6c83.firebaseapp.com",
  projectId: "react-redux-auth-c6c83",
  storageBucket: "react-redux-auth-c6c83.appspot.com",
  messagingSenderId: "768164832888",
  appId: "1:768164832888:web:e1079646ee7affd60aaf8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;