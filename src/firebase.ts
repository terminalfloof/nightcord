// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBla3plOwtvd0M59bkveJ567-HZzTy57g",
    authDomain: "nightcord-io.firebaseapp.com",
    projectId: "nightcord-io",
    storageBucket: "nightcord-io.appspot.com",
    messagingSenderId: "143656324569",
    appId: "1:143656324569:web:f39d68772dde9e816dddc8",
    measurementId: "G-NLE4P7T988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);