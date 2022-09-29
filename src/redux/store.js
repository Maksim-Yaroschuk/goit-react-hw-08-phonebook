import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    searchValue: searchReducer,
  },
});
