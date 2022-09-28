import { createSlice } from '@reduxjs/toolkit';

const itemsInitialState = [
  { id: 0, name: 'Max', number: +380975049124 },
  { id: 1, name: 'Dasha', number: +380977376600 },
  { id: 2, name: 'Artur', number: +380975326811 },
  { id: 3, name: 'Andriy', number: +380675556698 },
  { id: 4, name: 'Dima', number: +380665588996 },
  { id: 5, name: 'Alex', number: +380777588996 },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    prepare({ name, number, id }) {
      return {
        payload: {
          name,
          number,
          id,
        },
      };
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
