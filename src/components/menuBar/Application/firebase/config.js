import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjPQk2UdaGZUMU4koN6vrzu_cfRCCbVU",
  authDomain: "tsiklauri-app.firebaseapp.com",
  databaseURL:
    "https://tsiklauri-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tsiklauri-app",
  storageBucket: "tsiklauri-app.appspot.com",
  messagingSenderId: "1000973461332",
  appId: "1:1000973461332:web:c7fe56791486f570418ac1",
  measurementId: "G-NZ8W3VNNV4"
};

// init firebase app
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
