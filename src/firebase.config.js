// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhefQ7tfKLgfhvCU5eLim7wH1q1hwe-aY",
  authDomain: "house-marketplace-e8751.firebaseapp.com",
  projectId: "house-marketplace-e8751",
  storageBucket: "house-marketplace-e8751.appspot.com",
  messagingSenderId: "722797937403",
  appId: "1:722797937403:web:c946df94a46e02319f265e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
