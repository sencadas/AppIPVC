import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';
import {store} from '../../store/store.js';
import {Provider, useSelector} from 'react-redux';

const Auth = () => {
  //Provisório
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.AuthReducers.authToken);

  return (
    <NavigationContainer>
      {token === null ? <Login /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

const Routing = () => {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
};

export default Routing;
