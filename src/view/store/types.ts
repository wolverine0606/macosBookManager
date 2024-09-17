import {store} from './store';

export type RequestState = 'idle' | 'loading' | 'success' | 'failure';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RequestSliceState<T = undefined> = {
  error?: string;
  data?: T;
  state: RequestState;
};
