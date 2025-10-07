import { Pokemon, PokemonsReponse, SimplePokemon } from '@/pokemons';
import { notFound } from 'next/navigation';

export const getPokemons = async (
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

export const getPokemon = async (id: string): Promise<Pokemon> => {
	try {
		const path = 'https://pokeapi.co/api/v2/pokemon';
		const pokemon = await fetch(`${path}/${id}`, {
			// NOTE: Not compatible with static pages generation since
			// it follows the same idea.
			//cache: 'force-cache',
			next: { revalidate: 60 * 60 * 30 * 6 },
		}).then((res) => res.json());

		console.log(`Se cargo: ${pokemon.name}`);
		return pokemon;
	} catch (error) {
		console.log(error);
		notFound();
	}
};
