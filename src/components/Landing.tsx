import React from "react";
import Loader from "./Loader";

function Landing() {
	return (
		<div
			style={{ height: "81vh" }}
			className='bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-300 text-white'>
			<h1 className='text-center  text-xl mt-2'>Welcome Get</h1>
			<div className='flex flex-col justify-center items-center'>
				<dt className='mb-2 text-3xl font-extrabold'>10K+</dt>
				<dd className='font-light  text-white'>Templets</dd>
			</div>

			<div className='flex w-full justify-center mt-8 text-xl text-white'>
				Wait.. <Loader />
			</div>
		</div>
	);
}

export default Landing;
