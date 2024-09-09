import {createSlice} from '@reduxjs/toolkit';
import {getBooksThunk} from './thunks';
import {InitialState} from './types';

export const initialState: InitialState = {
  books: [],
  isLoading: false,
  error: undefined || '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBooksThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBooksThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
