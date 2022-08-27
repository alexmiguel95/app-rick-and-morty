import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    favorites: number[];
}

const initialState: IState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        handleAddingOrRemovingFavorites(state, action: PayloadAction<number>) {
            if (state.favorites.includes(action.payload)) {
                state.favorites = state.favorites.filter(f => f !== action.payload);
            } else {
                state.favorites.push(action.payload);
            }
        },
    },
});

export const { handleAddingOrRemovingFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
