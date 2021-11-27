import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = props => {
  const {navigation} = props;

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
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
