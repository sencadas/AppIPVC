import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../../store/auth/actions';

const DrawerContent = props => {
  const {navigation} = props;

  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Horário"
        onPress={() => {
          navigation.navigate('Horário');
        }}
      />
      <DrawerItem
        label="Calendário Letivo"
        onPress={() => {
          navigation.navigate('Calendário Letivo');
        }}
      />
      <DrawerItem
        label="Planos Curriculares"
        onPress={() => {
          navigation.navigate('Planos Curriculares');
        }}
      />

      <DrawerItem
        label="Sair"
        onPress={() => {
          dispatch(LogoutAction());
        }}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
