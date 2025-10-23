'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
	path: string;
	label: string;
}

const SidebarItem = ({ path, label }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === path;

	return (
		<li>
			<a
				href={path}
				className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl
                ${ isActive &&
                    'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
                }`}
			>
				<CiBookmarkCheck size={30} />
				<span className='-mr-1 font-medium'>{label}</span>
			</a>
		</li>
	);
};

export default SidebarItem;
