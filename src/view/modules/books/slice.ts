import {createSlice} from '@reduxjs/toolkit';
import {getBooksThunk} from './thunks';
import {InitialState} from './types';
import {failure, idle, loading, success} from '../../store/redux-utils';

export const initialState: InitialState = {
  books: undefined,
  getBooksRqst: idle(),
  booksRequested: false,
  query: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    firstRequest: state => {
      state.booksRequested = true;
    },
    setValue: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBooksThunk.pending, state => {
        state.getBooksRqst = loading(state.getBooksRqst);
      })
      .addCase(getBooksThunk.rejected, (state, action) => {
        state.getBooksRqst = failure(state.getBooksRqst, action.payload);
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.getBooksRqst = success();
        state.books = action.payload;
      });
  },
});
export const {firstRequest, setValue} = booksSlice.actions;

export default booksSlice.reducer;
