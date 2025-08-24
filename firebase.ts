// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSoqJXeC_uU_P3OPVS9TmZrImz0khXhTI",
  authDomain: "e-commmerce-c3b4e.firebaseapp.com",
  projectId: "e-commmerce-c3b4e",
  storageBucket: "e-commmerce-c3b4e.firebasestorage.app",
  messagingSenderId: "481417931185",
  appId: "1:481417931185:web:4f077861b4d3af948db590",
  measurementId: "G-YQS8ZYYSJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add this line to enable authentication
export const auth = getAuth(app);

// Optional: keep analytics if needed
const analytics = getAnalytics(app);
