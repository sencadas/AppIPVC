const initialState = {
  loading: false,
  //referentes ao user logado
  email: null,
  name: null,
  type: null,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_AUTH_SUCCESS':
      return {
        loading: false,
        email: action.payload.email,
        name: action.payload.name,
        type: action.payload.type,
        error: null,
      };
    case 'FETCH_AUTH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
