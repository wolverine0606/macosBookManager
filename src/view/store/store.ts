import {configureStore} from '@reduxjs/toolkit';
import booksReducer from '../modules/books/slice';

export const store = configureStore({
  reducer: {
    booksReducer,
  },
});
