import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from './types';
import {searchBooks} from '../../../data/models/books';

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
