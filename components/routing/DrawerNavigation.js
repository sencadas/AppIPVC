import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import TabRouting from './TabRouting';
import {store} from '../../store/store';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  let rotaAtual;

  //saber sempre em que rota estamos
  store.subscribe(() => {
    rotaAtual = store.getState().NavigationReducers.actualRoute;
  });

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContent rotaAtual={rotaAtual} {...props} />
      )}>
      <Drawer.Screen
        name="Home"
        options={({route}) => ({
          headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Resumo',
          drawerItemStyle: {
            display: 'none',
          },
        })}
        component={TabRouting}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
