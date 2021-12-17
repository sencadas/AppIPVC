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
      name: await AsyncStorage.getItem('name'),
      type: await AsyncStorage.getItem('type'),
    };
    if (user.email !== '') {
      dispatch(fetchAuthSuccess(user));
    }
  };
};

export const LoginAction = (username, password) => {
  const URL =
    'http://172.16.186.166:5000/api/Login/' + username + '/' + password;
  return dispatch => {
    //Exemplo para post
    /* const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }; */
    dispatch(fetchAuthRequest);
    fetch(URL)
      .then(response => response.json())
      .then(async json => {
        const email = json.email;
        const name = json.name;
        const type = json.type;

        dispatch(fetchAuthSuccess(json));
        try {
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('name', name);
          await AsyncStorage.setItem('type', type);
        } catch (error) {
          console.log('Erro ao inserir no asyncStorage: ' + error);
        }
      })
      .catch(error => {
        dispatch(fetchAuthFailure(error));
      });
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch(logout());
  };
};
