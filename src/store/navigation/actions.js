import {CHANGE_NAVIGATION} from './types';

export const ChangeNavigation = route => {
  return {
    type: CHANGE_NAVIGATION,
    actualRoute: route,
  };
};

export const ChangeNavigationAction = newRoute => {
  return async dispatch => {
    dispatch(ChangeNavigation(newRoute));
  };
};
