import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  LOGOUT,
} from './types';

export const fetchAuthRequest = () => {
  return {
    type: FETCH_AUTH_REQUEST,
  };
};

export const fetchAuthSuccess = user => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: user,
  };
};

export const fetchAuthFailure = error => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const InitAuth = () => {
  return async dispatch => {
    dispatch(fetchAuthRequest());

    let user = await AsyncStorage.getItem('userLogged');
    let userParsed = await JSON.parse(user);

    if (userParsed !== '') {
      dispatch(fetchAuthSuccess(userParsed));
    }
  };
};

export const LoginAction = data => {
  return async dispatch => {
    let userLogged = await JSON.stringify(data[0]);

    dispatch(fetchAuthSuccess(data[0]));
    try {
      await AsyncStorage.setItem('userLogged', userLogged);
    } catch (error) {
      console.log('Erro ao inserir no asyncStorage: ' + error);
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('userLogged');
    dispatch(logout());
  };
};
