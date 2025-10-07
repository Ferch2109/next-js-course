import { PokemonGrid } from '@/pokemons';
import { getPokemons } from './helper';



export default async function PokemonPage() {
	const pokemons = await getPokemons(151);

	return (
		<div className='flex flex-col'>
			<span className='text-5xl my-2'>
				Listado de Pokemons <small>estatico</small>
				<PokemonGrid pokemons={pokemons} />
			</span>
		</div>
	);
}
