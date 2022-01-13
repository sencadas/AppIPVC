const initialState = {
  loading: true,
  //referentes ao user logado
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HORARIO_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_HORARIO_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_HORARIO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
