import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../../store/actions';

const Definicoes = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(LogoutAction());
  };
  return (
    <View>
      <Button title="Sair" onPress={submit} />
    </View>
  );
};

export default Definicoes;
