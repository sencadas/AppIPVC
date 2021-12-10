const initialState = {
  //info a ser mostrada
  visible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL_SINGLE_AULA':
      return {
        ...state,
        visible: action.visible,
      };
    case 'OPEN_MODAL_SINGLE_AULA':
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
};
