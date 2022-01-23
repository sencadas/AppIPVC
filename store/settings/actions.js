import {CHANGE_HORARIO_VIEW} from './types';

export const ChangeNavigation = newTypeOfView => {
  return {
    type: CHANGE_HORARIO_VIEW,
    HorariotypeOfView: newTypeOfView,
  };
};

export const ChangeNavigationAction = newRoute => {
  return async dispatch => {
    dispatch(ChangeNavigation(newRoute));
  };
};
