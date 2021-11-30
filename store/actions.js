export const LoginAction = (username, password) => {
  const token = username + password;
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
