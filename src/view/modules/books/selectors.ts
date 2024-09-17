import {RootState} from '../../store/types';

export const getBooksRqstSelector = (s: RootState) =>
  s.booksReducer.getBooksRqst;
export const getBooksSelector = (s: RootState) => s.booksReducer.books;
export const firstBooksSelector = (s: RootState) =>
  s.booksReducer.booksRequested;
export const querySelector = (s: RootState) => s.booksReducer.query;
