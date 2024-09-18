import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  bookByTypeSelector,
  firstBooksSelector,
  getBooksRqstSelector,
  getBooksSelector,
  querySelector,
} from './selectors';
import {getBooksThunk} from './thunks';
import {firstRequest, setValue} from './slice';

export const useBooks = () => useAppSelector(getBooksSelector);

export const useGetBooks = () => {
  const d = useAppDispatch();
  const getBooksRqst = useAppSelector(getBooksRqstSelector);
  const firstBooksRqst = useAppSelector(firstBooksSelector);

  const BooksRequested = () => {
    return d(firstRequest());
  };

  const getQuery = () => useAppSelector(querySelector);
  const value = getQuery();

  const setQuery = (value: string) => {
    return d(setValue(value));
  };

  useEffect(() => {
    if (!getBooksRqst.data && value) {
      getBooks(value);
      BooksRequested();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBooksRqst.data, value]);

  const getBooks = useCallback(
    (value: string) => {
      return d(getBooksThunk(value));
    },
    [d],
  );
  const selectedBook = (id: string) =>
    useAppSelector(state => bookByTypeSelector(state, id));

  return {
    getBooks,
    getBooksRqst,
    firstBooksRqst,
    setQuery,
    getQuery,
    selectedBook,
  };
};

export const getBookById = (id: string) => {
  return {};
};
