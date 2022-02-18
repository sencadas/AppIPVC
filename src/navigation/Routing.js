import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/login/Login';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {InitAuth} from '../store/auth/actions';
import {InitSettings} from '../store/settings/actions';

import Loading from '../library/components/Loading';

const Routing = () => {
  //Provisório
  const UserLogged = useSelector(state => state.AuthReducers.userLogged);
  const isLoading = useSelector(state => state.AuthReducers.loading);

  //Necessério para o login automático
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitAuth());
    dispatch(InitSettings());
  }, [dispatch]);

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <NavigationContainer>
          {UserLogged === null ? <Login /> : <DrawerNavigation />}
        </NavigationContainer>
      )}
    </>
  );
};

export default Routing;
