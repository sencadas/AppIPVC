export const LoginAction = (username, password) => {
  let token = null;
  const URL = 'http://192.168.1.5:5000/api/Login/' + username + '/' + password;
  let data = {};
  console.log('email: ' + username);
  console.log('password: ' + password);

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
  fetch(URL)
    .then(response => response.json())
    .then(json => {
      data = json;
    })
    .catch(error => {
      throw error;
    });

  //verificar password (provisório)
  if (data.error !== 'not found') {
    return {
      type: 'LOGIN',
      payload: null,
    };
  }

  return {
    type: 'LOGIN',
    payload: data,
  };
};

export const LogoutAction = () => {
  return {
    type: 'LOGOUT',
    payload: null,
  };
};
