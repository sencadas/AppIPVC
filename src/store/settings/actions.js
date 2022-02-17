import {CHANGE_HORARIO_VIEW} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChangeHorarioView = newTypeOfView => {
  return {
    type: CHANGE_HORARIO_VIEW,
    HorariotypeOfView: newTypeOfView,
  };
};

export const InitSettings = () => {
  return async dispatch => {
    let typeOfView = await AsyncStorage.getItem('HorariotypeOfView');

    if (typeOfView !== null) {
      let parsedtypeOfView = await parseInt(typeOfView);
      dispatch(ChangeHorarioViewAction(parsedtypeOfView));
    }
  };
};

export const ChangeHorarioViewAction = newTypeOfView => {
  return async dispatch => {
    await AsyncStorage.setItem('HorariotypeOfView', newTypeOfView.toString());

    dispatch(ChangeHorarioView(newTypeOfView));
  };
};
