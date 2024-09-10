import {RequestSliceState} from './types';

const LOOADING: RequestSliceState = {
  state: 'loading',
  error: undefined,
};

const SUCCESS: RequestSliceState = {
  state: 'success',
  error: undefined,
};

const ERROR: RequestSliceState = {
  state: 'failure',
};

const IDLE: RequestSliceState = {
  state: 'idle',
};

export const loading = <T>(
  currentRqst: RequestSliceState<T>,
): RequestSliceState<T> => ({
  ...LOOADING,
  data: currentRqst.data,
});

export const success = <T>(payload?: T): RequestSliceState<T> => ({
  ...SUCCESS,
  data: payload,
});

export const failure = <T>(
  currentRqst: RequestSliceState<T>,
  error: string | undefined,
): RequestSliceState<T> => ({
  ...ERROR,
  data: currentRqst.data,
  error,
});

export const idle = <T>(): RequestSliceState<T> => ({
  ...IDLE,
});
