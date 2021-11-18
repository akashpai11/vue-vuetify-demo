// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "@firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACP9tK2lQEmfO5qBbU2302LBgK7Wl45Gs",
  authDomain: "vue-project-ab902.firebaseapp.com",
  projectId: "vue-project-ab902",
  storageBucket: "vue-project-ab902.appspot.com",
  messagingSenderId: "245889967906",
  appId: "1:245889967906:web:e5bd814bbe8c39255ba77b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// app.firestore().settings({ timestampsInSnapshots: true });

export default { app, db };
