import 'react-native-gesture-handler';
import React from 'react';
import Routing from './components/routing/Routing';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store.js';

//ignore Reanimeted Error
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
