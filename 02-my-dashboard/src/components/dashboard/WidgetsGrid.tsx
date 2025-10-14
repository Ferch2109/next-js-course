'use client';

import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { IoAirplane } from 'react-icons/io5';
import { useAppSelector } from '@/store';

const cards = [
	{
		title: 'Contador',
		subtitle: 'Productos agregados',
		label: 'Contador',
		href: '/dashboard/counter',
		Icon: IoAirplane,
	},
];

export const WidgetsGrid = () => {
	const isCart = useAppSelector((state) => state.counter.count);

	return (
		<div className='flex flex-wrap p-2 items-center justify-center'>
			{cards.map((props, idx) => (
				<SimpleWidget
					key={`${idx}-card`}
					{...props}
					title={`${isCart}`}
				/>
			))}
		</div>
	);
};
