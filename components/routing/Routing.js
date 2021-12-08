import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Init} from '../../store/auth/actions';
import {ActivityIndicator, View} from 'react-native';

const Routing = () => {
  //Provisório
  const user = useSelector(state => state.AuthReducers);

  //Necessério para o login automático
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Init());
  }, [dispatch]);

  if (user.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user.name === null ? <Login /> : <DrawerNavigation />}
    </NavigationContainer>
  );
};

export default Routing;
