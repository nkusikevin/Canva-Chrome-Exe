import React from "react";
import {
	AiOutlineHome,
	AiOutlineQuestionCircle,
	AiOutlineCrown,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<aside className='w-64' aria-label='Sidebar'>
			<div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-white'>
				<ul className='space-y-2'>
					<li>
						<Link
							to='/dashboard'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineHome />
						</Link>
					</li>
					<li>
						<Link
							to='/faq'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineQuestionCircle />
						</Link>
					</li>
					<li>
						<Link
							to='/subscription'
							className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<AiOutlineCrown />
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
