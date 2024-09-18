import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {AppStackParamList} from './types';
import {HomeScreen} from '../screens/HomeScreen';
import {BookScreen} from '../screens/BookScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen options={{}} name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{headerShown: true}}
          name="Book"
          component={BookScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
