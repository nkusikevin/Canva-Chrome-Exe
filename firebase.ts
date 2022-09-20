// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDrzLrIdPrF1TNjotyeq3vSsM15RuXGGtw",
	authDomain: "chrom-extansition.firebaseapp.com",
	projectId: "chrom-extansition",
	storageBucket: "chrom-extansition.appspot.com",
	messagingSenderId: "488774138667",
	appId: "1:488774138667:web:db657f63243b6ecd14636e",
	measurementId: "G-8KHTMJ1NKL",
	databaseURL: "https://chrom-extansition-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
