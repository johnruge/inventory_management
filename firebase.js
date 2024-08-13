// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { IBM_Plex_Mono } from "next/font/google";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-1e283.firebaseapp.com",
  projectId: "inventory-management-1e283",
  storageBucket: "inventory-management-1e283.appspot.com",
  messagingSenderId: "27476318247",
  appId: "1:27476318247:web:fcc519f24a66e3d9ff1602",
  measurementId: "G-QY15NP0ET2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}