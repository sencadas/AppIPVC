export const LoginAction = (username, password) => {
  const token = username + password;
  return {
    type: 'LOGIN',
    payload: token,
  };
};
