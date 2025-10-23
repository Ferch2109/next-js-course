import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLogout } from 'react-icons/ci';
import SidebarItem from './SidebarItem';

const items = [
	{
		path: '/dashboard',
		label: 'Dashboard',
	},
	{
		path: '/dashboard/rest-todos',
		label: 'Rest Todos',
	},
	{
		path: '/categories',
		label: 'Categories',
	},
];

const Sidebar = () => {
	return (
		<aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
			<div>
				<div className='-mx-6 px-6 py-4'>
					<Link
						href='/dashboard'
						title='home'
					>
						<Image
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png'
							width={200}
							height={100}
							alt='tailus logo'
						/>
					</Link>
				</div>

				<div className='mt-8 text-center'>
					<Image
						src='https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-mediumSquareAt3X.jpg'
						alt=''
						width={100}
						height={100}
						className='m-auto rounded-full object-cover lg:w-28 lg:h-28'
					/>
					<h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
						Cynthia J. Watts
					</h5>
					<span className='hidden text-gray-400 lg:block'>Admin</span>
				</div>

				<ul className='space-y-2 tracking-wide mt-8'>
					{items.map((item) => (
						<SidebarItem
							key={item.label}
							{...item}
						/>
					))}
				</ul>
			</div>

			<div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
				<button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
					<CiLogout />
					<span className='group-hover:text-gray-700'>Logout</span>
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
