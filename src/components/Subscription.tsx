import React from "react";
import Sidebar from "./Sidebar";

function Subscription() {
	return (
		<div>
			<div className='layout'>
				<Sidebar />
				<div style={{ height: "81vh" }} className='bg-gray-100'>
					<h1 className='text-center font-bold mt-4'>Subscription</h1>
				</div>
			</div>
		</div>
	);
}

export default Subscription;
