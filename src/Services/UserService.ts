import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore();
const auth = getAuth();

export const signUp = async (username, email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		const db = getDatabase();
		set(ref(db, "users/" + user.uid), {
			username: username,
			email: user.email,
		});
		return user;
	} catch (error) {
		return error.message;
	}
};

export const signIn = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		return user;
	} catch (error) {
		const errorr = error.message;
		return errorr;
	}
};

export const signout = async () => {
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		return false;
	}
};
