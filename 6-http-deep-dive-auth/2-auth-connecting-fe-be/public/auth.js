// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvRlpISOCoIghN6iYcPZlX3-XV6HUtic",
  authDomain: "test-app-f5d48.firebaseapp.com",
  projectId: "test-app-f5d48",
  storageBucket: "test-app-f5d48.appspot.com",
  messagingSenderId: "234543070780",
  appId: "1:234543070780:web:0791aca27b42bec16c0d39",
  measurementId: "G-J2SKXSLVDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageConde = "en";
const provider = new GoogleAuthProvider();

const googleBtn = document.querySelector("#google-login-button");
googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      localStorage.setItem("token", token);
      window.location.href = "dashboard";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
