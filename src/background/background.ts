// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.API_KEY_TOKEN,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGE_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
	databaseURL: process.env.DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const getCurrentUser = async () => {
	const user = await auth.currentUser;
	console.log("user" + user);
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === "complete") {
		console.log(changeInfo);

		chrome.tabs.executeScript(tabId, {
			file: "js/jquery.min.js",
		});
	}
});

chrome.action.onClicked.addListener((tab) => {
	getCurrentUser();
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["content-script.js", "js/jquery.min.js"],
	});
});
