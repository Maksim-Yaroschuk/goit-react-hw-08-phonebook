import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addItems = createAction('items/AddItems');
export const deleteItem = createAction('items/deleteItems');
export const setContactsFilter = createAction('filters/setContactsFilter');

export const addItem = createAction('items/AddItems', contact => {
  return { payload: contact };
});
