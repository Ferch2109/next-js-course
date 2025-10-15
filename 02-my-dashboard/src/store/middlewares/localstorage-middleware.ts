import { ACTIONS } from '@/interfaces/pokemons/actions';
import { STORAGE } from '@/interfaces/pokemons/storage';
import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action);
		console.log(state.getState());

		if (action.type === ACTIONS.TOOGLE_FAVORITE) {
			const { pokemons } = state.getState();
			localStorage.setItem(STORAGE.FAVORITES, JSON.stringify(pokemons));
		}
	};
};
