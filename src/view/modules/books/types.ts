import {RequestSliceState} from '../../store/types';

export type InitialState = {
  getBooksRqst: RequestSliceState;
  booksRequested: boolean;
  query: string | undefined;
};

export type Book = {
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
    publishedDate?: string;
    infoLink?: string;
  };
};
