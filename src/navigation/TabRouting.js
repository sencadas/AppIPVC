import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PaginaInicial from '../screens/home/Home';
import Perfil from '../screens/perfil/Perfil';
import Definicoes from '../screens/definicoes/Definicoes';
import Horario from '../screens/horarios/Horario';
import CalendarioLetivo from '../screens/calendarioLetivo/CalendarioLetivo';
import PlanosCurriculares from '../screens/planosCurriculares/PlanosCurriculares';
import {useDispatch} from 'react-redux';
import {ChangeNavigationAction} from '../store/navigation/actions';

const Tab = createBottomTabNavigator();

const hiddenTabs = ['Horário', 'Calendário Letivo', 'Planos Curriculares'];

const TabRouting = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Resumo') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Definições') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarButton: hiddenTabs.includes(route.name) ? () => null : undefined,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Resumo"
        listeners={{
          tabPress: () => {
            dispatch(ChangeNavigationAction('resumo'));
          },
        }}
        component={PaginaInicial}
      />
      <Tab.Screen
        name="Perfil"
        listeners={{
          tabPress: () => {
            dispatch(ChangeNavigationAction('perfil'));
          },
        }}
        component={Perfil}
      />
      <Tab.Screen
        name="Definições"
        listeners={{
          tabPress: () => {
            dispatch(ChangeNavigationAction('definicoes'));
          },
        }}
        component={Definicoes}
      />

      {/* Rotas Escondidas, acedidas através do DrawerContent */}
      <Tab.Screen name="Horário" component={Horario} />
      <Tab.Screen name="Calendário Letivo" component={CalendarioLetivo} />
      <Tab.Screen name="Planos Curriculares" component={PlanosCurriculares} />
    </Tab.Navigator>
  );
};

export default TabRouting;
