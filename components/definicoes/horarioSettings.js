import React, {useState} from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

const HorarioSettings = () => {
  const [checked, setChecked] = useState('first');

  return (
    <View>
      <Text>Escolha o modo do Horário:</Text>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <RadioButton.Item label="Visão diária" value="1" />
        <RadioButton.Item label="Visão Semanal" value="6" />
      </RadioButton.Group>
    </View>
  );
};

export default HorarioSettings;
