// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });




