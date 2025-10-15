import { SimplePokemon } from '@/components/pokemons';
import { STORAGE } from '@/interfaces/pokemons/storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favorites {
	[key: string]: SimplePokemon;
}

interface PokemonsState {
	favorites: Favorites;
}

// const getInitialState = (): PokemonsState => {
// 	const favorites = JSON.parse(localStorage.getItem(STORAGE.FAVORITES) ?? '{}');
// 	return favorites;
// };

const initialState: PokemonsState = { favorites: {} };

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		setFavoritePokemons(state, action: PayloadAction<Favorites>) {
			state.favorites = action.payload;
		},
		toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;

			if (!!state.favorites[id]) {
				delete state.favorites[id];
			} else {
				state.favorites[id] = pokemon;
			}

			// TODO: No se debe de hacer en redux!
			localStorage.setItem(STORAGE.FAVORITES, JSON.stringify(state.favorites));
		},
	},
});

export const { setFavoritePokemons, toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
