import {combineReducers, configureStore} from '@reduxjs/toolkit';
import booksReducer from '../modules/books/slice';

const rootReducers = combineReducers({
  booksReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
