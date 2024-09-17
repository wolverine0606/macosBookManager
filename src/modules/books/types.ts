import {RequestSliceState} from '../../store/types';

export type InitialState = {
  books: Book[] | undefined;
  getBooksRqst: RequestSliceState;
  booksRequested: boolean;
  query: string | undefined;
};

export interface Book {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    averageRating?: number;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    pageCount?: number;
  };
}
