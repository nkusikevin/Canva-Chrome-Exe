import React from "react";

function Header() {
	return (
		<div className='pl-4 pt-4'>
			<h1 className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
				<img
					className='w-8 h-8 mr-2'
					src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
					alt='logo'
				/>
				+10k Canva Free Templates
			</h1>
		</div>
	);
}

export default Header;
