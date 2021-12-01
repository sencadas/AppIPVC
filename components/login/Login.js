import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../store/auth/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(LoginAction(username, password));
  };
  return (
    <View style={styles.container}>
      <Text>Login Page (apenas clicar em entrar)</Text>
      <TextInput
        style={styles.input}
        placeholder="Utilizador"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Palavra-passe"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.button}>
        <Button title="Entrar" onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
  },
  button: {
    width: '90%',
  },
});

export default Login;
