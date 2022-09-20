import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const user = auth.currentUser;
chrome.storage.local.set({ user: user }, function () {
	console.log("Value is set to " + user);
});

function initApp() {
	// Listen for auth state changes.
	onAuthStateChanged(auth, (user) => {
		console.log(
			"User state change detected from the Background script of the Chrome Extension:",
			user
		);
	});
}

window.onload = function () {
	initApp();
};
