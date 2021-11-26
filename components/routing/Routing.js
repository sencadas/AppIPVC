import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';

const Routing = () => {
  //Provisório
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <DrawerNavigation />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </NavigationContainer>
  );
};

export default Routing;
