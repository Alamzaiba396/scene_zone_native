import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 