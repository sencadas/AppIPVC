export const LoginAction = (username, password) => {
  let token = null;
  //verificar password (provisório)
  if (username === '' && password === '') {
    token = username + password;
  }

  return {
    type: 'LOGIN',
    payload: token,
  };
};

export const LogoutAction = () => {
  return {
    type: 'LOGOUT',
    payload: null,
  };
};
