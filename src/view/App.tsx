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
import {AppNavigator} from './navigation/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
