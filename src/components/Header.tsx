import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const [user, setUser] = useState<User>(null);
	// const user = localStorage.getItem("user");

	//check if user is logged in
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				navigate("/dashboard");
			} else {
				navigate("/login");
				setUser(null);
			}
		});
	}, []);

	const onLogoutClicked = async () => {
		await auth.signOut();
		navigate("/login");
		chrome.storage.local.clear();
		localStorage.removeItem("user");
		if (user) {
		}
	};

	return (
		<div className='px-4 pt-4 flex justify-between items-center h-12'>
			<div className='flex items-center text-2xl font-semibold text-gray-900 dark:text-white'>
				<img
					className='w-8 h-8 mr-2'
					src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
					alt='logo'
				/>
				+10k Canva Free Templates
			</div>
			{user && (
				<div
					className='flex items-center cursor-pointer'
					onClick={() => onLogoutClicked()}>
					<AiOutlineLogout className='text-2xl inline' />
					Logout
				</div>
			)}
		</div>
	);
}

export default Header;
