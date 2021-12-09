import {CLOSE_MODAL_SINGLE_AULA, OPEN_MODAL_SINGLE_AULA} from './types';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL_SINGLE_AULA,
    visible: false,
  };
};

export const openModal = route => {
  return {
    type: OPEN_MODAL_SINGLE_AULA,
    visible: true,
  };
};

export const CloseModalAction = () => {
  return async dispatch => {
    dispatch(closeModal());
  };
};

export const OpenModalAction = () => {
  return async dispatch => {
    dispatch(openModal());
  };
};
