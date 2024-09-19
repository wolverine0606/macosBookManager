import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from './types';
import axios from 'axios';

export const searchBooks = async (query: string): Promise<Book[]> => {
  const q = query;
  const fields =
    'items(id, selfLink, volumeInfo(title, authors, averageRating, description, imageLinks(thumbnail, smallThumbnail, small ), pageCount, publishedDate, infoLink, language, categories)), totalItems';
  const response = await axios.get(
    'https://www.googleapis.com/books/v1/volumes',
    {
      params: {
        q,
        fields,
        printType: 'books',
      },
    },
  );

  const data: Book[] = response.data.items;

  return data;
};

export const getBooksThunk = createAsyncThunk<
  Book[],
  string,
  {rejectValue: string}
>('getBooksThunk', async (searchTerm: string, {rejectWithValue}) => {
  try {
    const response = await searchBooks(searchTerm);

    return response;
  } catch (error: any) {
    return rejectWithValue(error.message || 'error while fetching data');
  }
});
