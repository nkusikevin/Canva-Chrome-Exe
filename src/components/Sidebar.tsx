import React from 'react'
import {
	AiOutlineHome,
	AiOutlineQuestionCircle,
	AiOutlineCrown,
} from "react-icons/ai";

function Sidebar() {
  return (
		<aside className='w-64' aria-label='Sidebar'>
			<div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-white'>
				<ul className='space-y-2'>
					<li>
						<a
							href='#'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineHome />
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineQuestionCircle />
						</a>
					</li>
					<li>
						<a
							href='#'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineCrown />
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar