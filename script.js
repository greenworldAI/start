// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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

// Countdown Timer
const launchDate = new Date('January 25, 2025 00:00:00').getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = launchDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (remainingTime <= 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = 'We Are Live!';
    }
}, 1000);

// Handle Email Submission
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email-input').value;

    if (email) {
        try {
            await addDoc(collection(db, "emailSubscribers"), {
                email: email,
                timestamp: serverTimestamp()
            });
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('signup-form').reset();
        } catch (error) {
            console.error("Error adding email to Firestore:", error);
        }
    } else {
        alert("Please enter a valid email address.");
    }
});
