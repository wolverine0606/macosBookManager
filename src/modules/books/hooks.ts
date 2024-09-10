import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getBooksRqstSelector, getBooksSelector} from './selectors';
import {getBooksThunk} from './thunks';

export const useBooks = () => useAppSelector(getBooksSelector);

export const useGetBooks = (value: string) => {
  const d = useAppDispatch();
  const getBooksRqst = useAppSelector(getBooksRqstSelector);
  useEffect(() => {
    if (!getBooksRqst.data) {
      getBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBooksRqst.data]);

  const getBooks = useCallback(
    () => {
      return d(getBooksThunk(value));
    },
    [d, value], // Ensures this function is stable and doesn't change on re-render
  );
  return {getBooks, getBooksRqst};
};
