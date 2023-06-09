// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

/* 
very sensitive jinis agula so , agula ke always hide korte hobe
*/
const firebaseConfig = {
  apiKey: "AIzaSyAtLPPoG8s8L_CDjp03X5aWBubrDJtGSh8",
  authDomain: "ema-john-auth-router-5d26b.firebaseapp.com",
  projectId: "ema-john-auth-router-5d26b",
  storageBucket: "ema-john-auth-router-5d26b.appspot.com",
  messagingSenderId: "556828154048",
  appId: "1:556828154048:web:6beef281de5f3776baf525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
