// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pHUy2gMVkNFoc5gaiI5lgQf5ZLTX9EE",
  authDomain: "owenscorepredictionapp.firebaseapp.com",
  projectId: "owenscorepredictionapp",
  storageBucket: "owenscorepredictionapp.appspot.com",
  messagingSenderId: "654829873080",
  appId: "1:654829873080:web:cc7de82eb72b4f7cc6d14d"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);




const auth = getAuth(firebaseapp);


onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("user logged in")
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log("User is signed out")
    // ...
  }
});




