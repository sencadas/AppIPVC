import 'react-native-gesture-handler';
import React from 'react';
import Routing from './components/routing/Routing';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './store/store.js';

//ignore Reanimeted Error
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider store={store}>
        <Routing />
      </PaperProvider>
    </Provider>
  );
};

export default App;
