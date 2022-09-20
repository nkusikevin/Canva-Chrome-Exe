import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
const auth = getAuth();
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
