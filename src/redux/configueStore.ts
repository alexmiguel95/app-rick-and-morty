import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorite';

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
