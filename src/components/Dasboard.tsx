import React from "react";
import $ from "jquery";
//check if the user is logged in

function Dasboard() {
	//button handler to fire event to the content script to duplicate the div
	const buttonHandler = () => {
		$(document).ready(function () {
			$("body").hide();
		});
	};

	return (
		<div style={{ height: "81vh" }} className='bg-gray-100'>
			<h1 className='text-center font-bold mt-4'>Dashboard</h1>

			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={() => buttonHandler()}>
				Click Me
			</button>
		</div>
	);
}

export default Dasboard;
