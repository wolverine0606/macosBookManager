/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {HomeScreen} from './screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {searchBooks} from './modules/books/thunks';

function App(): JSX.Element {
  searchBooks('Harry potter');
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
