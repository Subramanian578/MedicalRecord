import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {SignIn} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          navigationBarColor: '#ffffff',
        }}>
        <RootStack.Screen name="SignIn" component={SignIn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
