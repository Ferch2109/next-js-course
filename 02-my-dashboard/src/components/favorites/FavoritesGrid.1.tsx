'use client';
import { useState } from 'react';
import { PokemonGrid } from '../pokemons';
import { useAppSelector } from '@/store';
import { NoFavorites } from './FavoritesGrid';

export const FavoritesGrid = () => {
	const favoritePokemons = useAppSelector((state) =>
		Object.values(state.pokemons.favorites)
	);
	const [pokemons, setpokemons] = useState(favoritePokemons);

	useEffect(() => {}, []);

	return (
		<>
			{pokemons.length > 0 ? (
				<PokemonGrid pokemons={pokemons} />
			) : (
				<NoFavorites />
			)}
		</>
	);
};
