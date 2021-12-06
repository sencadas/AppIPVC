import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';
import {useSelector} from 'react-redux';

const Routing = () => {
  //Provisório
  const user = useSelector(state => state.AuthReducers.user);
  return (
    <NavigationContainer>
      {user._id === undefined ? <Login /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

export default Routing;
