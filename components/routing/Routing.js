import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';
import {useSelector} from 'react-redux';

const Routing = () => {
  //Provisório
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.AuthReducers.authToken);

  return (
    <NavigationContainer>
      {token === null ? <Login /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

export default Routing;
