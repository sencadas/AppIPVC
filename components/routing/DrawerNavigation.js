import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import TabRouting from './TabRouting';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
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
