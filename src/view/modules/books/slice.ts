import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getBooksThunk} from './thunks';
import {Book, InitialState} from './types';
import {failure, idle, loading, success} from '../../store/redux-utils';
import {RootState} from '../../store/types';

export const initialState: InitialState = {
  getBooksRqst: idle(),
  booksRequested: false,
  query: '',
};
const bookAdapter = createEntityAdapter<Book, string>({
  selectId: (book: Book) => book.id,
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: bookAdapter.getInitialState(initialState),
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
        bookAdapter.setAll(state, action.payload);
      });
  },
});

export const {firstRequest, setValue} = booksSlice.actions;
export const bookSelector = bookAdapter.getSelectors(
  (state: RootState) => state.booksReducer,
);

export default booksSlice.reducer;
