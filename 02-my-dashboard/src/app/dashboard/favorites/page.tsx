import { FavoritesGrid } from '@/components/favorites';

export const metadata = {
	title: 'Favoritos',
	description: 'Ad minim sit bla blebli',
};

export default async function PokemonPage() {
	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2'>
				Pokemons Favoritos{' '}
				<small className='text-blue-500'>Estado Global</small>
				<FavoritesGrid />
			</span>
		</div>
	);
}