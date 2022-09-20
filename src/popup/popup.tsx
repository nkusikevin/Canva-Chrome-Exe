import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
import App from "../App";
import { browserLocalPersistence, setPersistence } from "firebase/auth";

// This is the firebase.ts file we created a few
// steps ago when we received our config!
import { auth } from "../../firebase";

// We'll need to specify that we want Firebase to store
// our credentials in localStorage rather than in-memory
setPersistence(auth, browserLocalPersistence);

// get the user from local storage



const container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);

// First, we create a root
const root = createRoot(document.querySelector("#root"));

// Initial render. Container is implicitly accessed.
root.render(
	<Router>
		<App />
	</Router>
);
