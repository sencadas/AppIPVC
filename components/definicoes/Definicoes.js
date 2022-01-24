import React from 'react';
import HorarioTypeViewSettings from './horarioTypeViewSettings';
import {View} from 'react-native';
import BugReport from './BugReport';

function Definicoes() {
  return (
    <View style={{padding: 20, marginTop: 40}}>
      <HorarioTypeViewSettings />
      <BugReport />
    </View>
  );
}

export default Definicoes;
