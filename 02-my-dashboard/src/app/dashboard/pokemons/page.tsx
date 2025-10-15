import { PokemonGrid } from '@/components/pokemons';
import { getPokemons } from './helper';

export const metadata = {
	title: '151 Pokemons',
	description: 'Ad minim sit bla blebli',
};

export default async function PokemonPage() {
	const pokemons = await getPokemons(151);

	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2'>
				Listado de Pokemons <small className='text-blue-500'>estatico</small>
				<PokemonGrid pokemons={pokemons} />
			</span>
		</div>
	);
}
