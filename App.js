import 'react-native-gesture-handler';
import React from 'react';
import Routing from './src/navigation/Routing';
import {LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/store/store';

//ignore Reanimeted Error
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Routing />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
