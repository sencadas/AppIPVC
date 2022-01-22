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

export const Init = () => {
  return async dispatch => {
    dispatch(fetchAuthRequest());
    const user = {
      email: await AsyncStorage.getItem('email'),
      nome: await AsyncStorage.getItem('nome'),
      id_curso: await AsyncStorage.getItem('id_curso'),
      num_utilizador: await AsyncStorage.getItem('num_utilizador'),
      unidade_organica: await AsyncStorage.getItem('unidade_organica'),
    };
    if (user.email !== '') {
      dispatch(fetchAuthSuccess(user));
    }
  };
};

export const LoginAction = data => {
  return async dispatch => {
    const {email, id_curso, nome, num_utilizador, unidade_organica} = data;
    console.log(data);

    dispatch(fetchAuthSuccess(data));
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('nome', nome);
      await AsyncStorage.setItem('id_curso', id_curso);
      await AsyncStorage.setItem('num_utilizador', num_utilizador);
      await AsyncStorage.setItem('unidade_organica', unidade_organica);
    } catch (error) {
      console.log('Erro ao inserir no asyncStorage: ' + error);
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch(logout());
  };
};
