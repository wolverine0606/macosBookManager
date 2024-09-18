import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/types';
import {bookSelector} from './slice';

export const getBooksRqstSelector = (s: RootState) =>
  s.booksReducer.getBooksRqst;
export const getBooksSelector = (s: RootState) => bookSelector.selectAll(s);
export const firstBooksSelector = (s: RootState) =>
  s.booksReducer.booksRequested;
export const querySelector = (s: RootState) => s.booksReducer.query;
export const bookByTypeSelector = createSelector(
  [bookSelector.selectAll, (s: RootState, id: string) => id],
  (allBooks, id) => allBooks.find(book => book.id === id),
);
