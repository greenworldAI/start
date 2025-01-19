// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh2LL9QrYDXgov8TIwNpryC6yELWEVpfQ",
    authDomain: "start-b3150.firebaseapp.com",
    projectId: "start-b3150",
    storageBucket: "start-b3150.firebasestorage.app",
    messagingSenderId: "129649832675",
    appId: "1:129649832675:web:b1b890b4d7a8dff76e8bd6",
    measurementId: "G-9B7H2EWEXJ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Submission Handler
document.querySelector(".signup-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the page from reloading

  const emailInput = e.target.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  if (email) {
    try {
      // Add email to Firestore
      await addDoc(collection(db, "emailSubscribers"), {
        email: email,
        timestamp: serverTimestamp(),
      });

      alert("Thank you for signing up!");
      emailInput.value = ""; // Clear the input field
    } catch (error) {
      console.error("Error adding email to Firestore:", error);
      alert("There was an error. Please try again.");
    }
  } else {
    alert("Please enter a valid email address.");
  }
});
