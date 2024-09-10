import {RequestSliceState} from '../../store/types';

export type InitialState = {
  books: Book[] | undefined;
  getBooksRqst: RequestSliceState;
};

export interface Book {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    averageRating?: number;
    description?: string;
    imagelinks?: {
      thumbnail: string;
    };
    pageCount?: number;
  };
}
