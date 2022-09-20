import React, { useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
	signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function IndexPopup() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<User>(null);

	// When the user clicks log in, we need to ask Chrome
	// to log them in, get their Google auth token,
	// send it to Firebase, and let Firebase do its magic
	// if everything worked, we'll get a user object from them
	const onLoginClicked = () => {
		chrome.identity.getAuthToken({ interactive: true }, async function (token) {
			if (chrome.runtime.lastError || !token) {
				console.error(chrome.runtime.lastError);
				setIsLoading(false);
				return;
			}
			if (token) {
				const credential = GoogleAuthProvider.credential(null, token);
				try {
					// There's no need to do anything with what this returns
					// since we're keeping track of the user object with
					// onAuthStateChanged
					await signInWithCredential(auth, credential);
					navigate("/dashboard");
					//save user token to local storage
					chrome.storage.local.set({ user: token }, function () {
						console.log("Value is set to " + token);
					});
				} catch (e) {
					console.error("Could not log in. ", e);
				}
			}
		});
	};

	// We register this listener once when this component starts
	useEffect(() => {
		// Whenever the auth changes, we make sure we're no longer loading
		// and set the user! On login, this will populate with a new user
		// on logout, this will make user null
		onAuthStateChanged(auth, (user) => {
			// firebase.database().ref(`/users/${user.uid}/${ref}/`);
			setIsLoading(false);
			setUser(user);
		});
	}, []);
	return (
		<div
			className='flex flex-col items-center justify-center  bg-gray-100'
			style={{ height: "80vh" }}>
			{isLoading && (
				<div className='mb-4'>
					<Loader />
				</div>
			)}
			{!user && (
				<button
					onClick={() => {
						setIsLoading(true);
						onLoginClicked();
					}}
					type='button'
					className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
					<svg
						className='mr-2 -ml-1 w-4 h-4'
						aria-hidden='true'
						focusable='false'
						data-prefix='fab'
						data-icon='google'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 488 512'>
						<path
							fill='currentColor'
							d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
					</svg>
					Sign in with Google
				</button>
			)}
			{/* <div className='w-screen'>{!!user ? <Home user={user} /> : ""}</div> */}
		</div>
	);
}

export default IndexPopup;
