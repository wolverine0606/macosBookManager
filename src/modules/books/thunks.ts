import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Book} from './types';

export const searchBooks = async (query: string) => {
  const fields =
    'items( id, volumeInfo(title, authors, averageRating, description, imageLinks(thumbnail), pageCount, publishedDate))';
  const response = await axios.get(
    'https://www.googleapis.com/books/v1/volumes',
    {
      params: {
        q: query + 'intitle',
        fields,
      },
    },
  );
  console.log(response.data.items);

  return response.data.items;
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
