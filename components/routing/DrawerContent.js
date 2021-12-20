import React, {useState} from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {LogoutAction} from '../../store/auth/actions';
import {ChangeNavigationAction} from '../../store/navigation/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = props => {
  const {navigation, rotaAtual} = props;
  const [name, setName] = useState([]);

  try {
    AsyncStorage.getItem('name').then(value => {
      setName(value);
    });
  } catch (e) {
    console.log(e);
  }
  const dispatch = useDispatch();

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Bem Vindo, </Text>
        <Text style={styles.Name}>{name}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.MainDrawerSection}>
          <DrawerItem
            icon={({size, color}) => {
              color = 'gray';
              if (rotaAtual === 'horario') {
                color = 'tomato';
              }
              return <Ionicons name={'time'} size={size} color={color} />;
            }}
            focused={rotaAtual === 'horario'}
            label="Horário"
            inactiveTintColor="gray"
            activeTintColor="tomato"
            onPress={() => {
              dispatch(ChangeNavigationAction('horario'));
              navigation.navigate('Horário');
            }}
          />
          <DrawerItem
            icon={({size, color}) => {
              color = 'gray';
              if (rotaAtual === 'calendarioLetivo') {
                color = 'tomato';
              }
              return <Ionicons name={'calendar'} size={size} color={color} />;
            }}
            focused={rotaAtual === 'calendarioLetivo'}
            label="Calendário Letivo"
            inactiveTintColor="gray"
            activeTintColor="tomato"
            onPress={() => {
              dispatch(ChangeNavigationAction('calendarioLetivo'));
              navigation.navigate('Calendário Letivo');
            }}
          />
          <DrawerItem
            icon={({size, color}) => {
              color = 'gray';
              if (rotaAtual === 'planosCurriculares') {
                color = 'tomato';
              }
              return <Ionicons name={'school'} size={size} color={color} />;
            }}
            focused={rotaAtual === 'planosCurriculares'}
            label="Planos Curriculares"
            inactiveTintColor="gray"
            activeTintColor="tomato"
            onPress={() => {
              dispatch(ChangeNavigationAction('planosCurriculares'));
              navigation.navigate('Planos Curriculares');
            }}
          />
        </View>
      </DrawerContentScrollView>

      <View style={styles.BottomDrawerSection}>
        <DrawerItem
          icon={({size, color}) => {
            color = 'gray';

            return <Ionicons name={'log-out'} size={size} color={color} />;
          }}
          label="Sair"
          onPress={() => {
            dispatch(LogoutAction());
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
  },
  Title: {
    fontWeight: '500',
    fontSize: 20,
    color: '#787373',
  },
  Name: {
    fontWeight: '500',
    fontSize: 20,
    color: '#403b3b',
  },
  Container: {
    flex: 1,
  },
  MainDrawerSection: {
    marginTop: 20,
  },
  BottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 2,
  },
});
export default DrawerContent;
