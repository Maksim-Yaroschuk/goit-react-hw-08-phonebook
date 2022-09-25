import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, filtersReducer } from './reducer';

export const store = configureStore({
  reducer: { items: itemsReducer, filters: filtersReducer },
});
