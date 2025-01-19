// Countdown Timer
const launchDate = new Date("January 25, 2025 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = launchDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (remainingTime <= 0) {
        clearInterval(timer);
        document.getElementById("timer").textContent = "We Are Live!";
    }
}, 1000);

// Firebase Email Submission Logic
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

document.querySelector(".signup-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form refresh
    const emailInput = document.querySelector(".signup-form input[type='email']");
    const email = emailInput.value;

    try {
        // Save email to Firestore
        await addDoc(collection(db, "emailSubscribers"), {
            email: email,
            timestamp: new Date()
        });

        document.getElementById("message").innerText = "Thank you for signing up!";
        emailInput.value = ""; // Clear input
    } catch (error) {
        document.getElementById("message").innerText = "Error: Unable to save your email.";
        console.error("Error saving email:", error);
    }
});
