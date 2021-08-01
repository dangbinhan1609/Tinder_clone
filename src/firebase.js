import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAEBBP3WTOTgUbIjTQO--TIsxRzwgPSY-s",
    authDomain: "tinder-clone-bb3ab.firebaseapp.com",
    projectId: "tinder-clone-bb3ab",
    storageBucket: "tinder-clone-bb3ab.appspot.com",
    messagingSenderId: "935686600609",
    appId: "1:935686600609:web:3c985e666954c881c1fde0",
    measurementId: "G-ZVJ2F3CVEP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const databates = firebaseApp.firestore();

export default databates;