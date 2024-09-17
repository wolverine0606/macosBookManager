/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {darkTheme} from './theme';
import {ThemeProvider} from '@shopify/restyle';
import {HomeScreen} from './screens/HomeScreen';
import {Platform} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
