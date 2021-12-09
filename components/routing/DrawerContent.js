import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../../store/auth/actions';
import {ChangeNavigationAction} from '../../store/navigation/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = props => {
  const {navigation, rotaAtual} = props;

  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({size, color}) => {
          color = 'gray';
          if (rotaAtual === 'horario') {
            color = 'tomato';
          }
          return <Ionicons name={'calendar'} size={size} color={color} />;
        }}
        focused={rotaAtual === 'horario'}
        inactiveTintColor="gray"
        activeTintColor="tomato"
        label="Horário"
        onPress={() => {
          dispatch(ChangeNavigationAction('horario'));
          navigation.navigate('Horário');
        }}
      />
      <DrawerItem
        label="Calendário Letivo"
        onPress={() => {
          dispatch(ChangeNavigationAction('calendarioLetivo'));
          navigation.navigate('Calendário Letivo');
        }}
      />
      <DrawerItem
        label="Planos Curriculares"
        onPress={() => {
          dispatch(ChangeNavigationAction('planosCurriculares'));
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
