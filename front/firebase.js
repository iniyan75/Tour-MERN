import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXuk6g6xbQj1-2U25kF3Iwj6Ijgvk4dqY",
  authDomain: "login-410c9.firebaseapp.com",
  projectId: "login-410c9",
  storageBucket: "login-410c9.appspot.com",
  messagingSenderId: "498754253847",
  appId: "1:498754253847:web:e6a4df32b5ccd98d071852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
