import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
import { addItem, deleteItem, setContactsFilter } from './actions';

const itemsInitialState = [];

export const itemsReducer = createReducer(itemsInitialState, {
  [addItem]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteItem]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const filtersInitialState = { status: {} };

export const filtersReducer = createReducer(filtersInitialState, {
  [setContactsFilter]: (state, action) => {
    return { ...state, status: action.payload };
  },
});

// export const filtersReducer = createReducer(filtersInitialState,
// {
// [setStatusFilter]: (state, action) => {
// return { ...state, status: action.payload, };
// },});
