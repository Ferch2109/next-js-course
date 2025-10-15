'use client';

import { useState } from 'react';
import { PokemonGrid } from '../pokemons';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritesGrid = () => {
	const favoritePokemons = useAppSelector((state) =>
		Object.values(state.pokemons.favorites)
	);
	const [pokemons, setPokemons] = useState(favoritePokemons);

	return (
		<>
			{favoritePokemons.length > 0 ? (
				<PokemonGrid pokemons={favoritePokemons} />
			) : (
				<NoFavorites />
			)}
		</>
	);
};

const NoFavorites = () => (
	<div className='flex flex-col h-[50vh] items-center justify-center'>
		<IoHeartOutline
			size={100}
			className='text-red-500'
		/>
		<span>No hay favoritos</span>
	</div>
);
