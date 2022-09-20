import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/UserService";
import Loader from "./Loader";
export default function Registration() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, seterror] = useState("");

	const handleSubmit = async () => {
		if (!password || !name || !email) {
			seterror("Please fill all fields");
		} else {
			setLoading(true);
			const res = await signUp(name, email, password);
			setLoading(false);
			if (res) {
				seterror(res);
			}
		}
	};
	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							SignUp
						</h1>
						<p className='text-red-500'>{error ? <div>{error}</div> : null}</p>
						<div className='space-y-4 md:space-y-6'>
							<div>
								<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									User Name
								</label>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='user name'
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='name@company.com'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								type='button'
								className='w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
								onClick={() => {
									handleSubmit();
								}}>
								Sign Up
								{loading && <Loader />}
							</button>
							<div className='text-sm font-light text-gray-500 dark:text-gray-400'>
								Already have an account yet?{" "}
								<p
									onClick={() => navigate("/")}
									className='font-medium inline text-primary-600 hover:underline dark:text-primary-500'>
									SignIn
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
