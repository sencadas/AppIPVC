import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../login/Login';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Init} from '../../store/auth/actions';
import Loading from '../universalComponents/Loading';
const Routing = () => {
  //Provisório
  const user = useSelector(state => state.AuthReducers);

  //Necessério para o login automático
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Init());
  }, [dispatch]);

  return (
    <>
      {user.loading === true ? (
        <Loading />
      ) : (
        <NavigationContainer>
          {user.nome === null ? <Login /> : <DrawerNavigation />}
        </NavigationContainer>
      )}
    </>
  );
};

export default Routing;
