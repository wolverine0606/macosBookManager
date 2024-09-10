import {RootState} from '../../store/types';

export const getBooksRqstSelector = (s: RootState) =>
  s.booksReducer.getBooksRqst;
export const getBooksSelector = (s: RootState) => s.booksReducer.books;
