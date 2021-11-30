export const LoginAction = (username, password) => {
  let token = null;
  //verificar password
  if (username === '' && password === '') {
    token = username + password;
  }

  console.log(token);
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
