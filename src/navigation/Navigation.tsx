import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {PlayGround} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="PlayGround"
        screenOptions={{
          headerShown: false,
          navigationBarColor: '#ffffff',
        }}>
        <RootStack.Screen name="PlayGround" component={PlayGround} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
