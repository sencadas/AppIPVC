import React, {useState} from 'react';
import HorarioSettings from './horarioSettings';
import {View} from 'react-native';
import BugReport from './BugReport';

function Definicoes() {
  const [checked, setChecked] = useState('first');

  return (
    <View style={{padding: 20, marginTop: 40}}>
      <HorarioSettings />
      <BugReport />
    </View>
  );
}

export default Definicoes;
