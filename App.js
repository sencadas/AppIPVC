import 'react-native-gesture-handler';
import React from 'react';
import Routing from './components/routing/Routing';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return <Routing />;
};

export default App;
