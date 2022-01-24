import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeHorarioViewAction} from '../../store/settings/actions';

const HorarioTypeViewSettings = () => {
  const checked = useSelector(
    state => state.SettingsReducers.HorariotypeOfView,
  );

  const dispatch = useDispatch();

  const changeTypeOfView = newType => {
    dispatch(ChangeHorarioViewAction(newType));
  };

  return (
    <View>
      <Text>Escolha o modo do Horário:</Text>
      <RadioButton.Group
        onValueChange={newValue => changeTypeOfView(newValue)}
        value={checked}>
        <RadioButton.Item label="Visão diária" value={1} />
        <RadioButton.Item label="Visão Semanal" value={6} />
      </RadioButton.Group>
    </View>
  );
};

export default HorarioTypeViewSettings;
