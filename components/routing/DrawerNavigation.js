import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import TabRouting from './TabRouting';

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends Component {
  render() {
    return (
      <Drawer.Navigator drawerContent={props => DrawerContent(props)}>
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
  }
}
