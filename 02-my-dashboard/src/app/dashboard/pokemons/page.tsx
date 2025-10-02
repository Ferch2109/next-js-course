import { PokemonGrid, PokemonsReponse, SimplePokemon } from '@/pokemons';
import Image from 'next/image';

const getPokemons = async (
	limit = 10,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: PokemonsReponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json());

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}));

	return pokemons;
};

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
