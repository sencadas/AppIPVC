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

export const LoginAction = (username, password) => {
  const URL = 'http://192.168.1.4:5000/api/Login/' + username + '/' + password;
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
      .then(json => {
        dispatch(fetchAuthSuccess(json));
      })
      .catch(error => {
        dispatch(fetchAuthFailure(error));
      });
  };
};

export const LogoutAction = () => {
  return dispatch => {
    dispatch(logout());
  };
};
