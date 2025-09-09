import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2q99EtNfT0HJ5HQPDVipcy4JIiUXD7A",
  authDomain: "investment-site-285a4.firebaseapp.com",
  projectId: "investment-site-285a4",
  storageBucket: "investment-site-285a4.appspot.com",
  messagingSenderId: "19188315569",
  appId: "1:19188315569:web:8547c548146ea86fc43990",
  measurementId: "G-XKFGPB15GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
