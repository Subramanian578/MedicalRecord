import React from 'react';
// Native components
import {StatusBar} from 'react-native';
// Packages
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
