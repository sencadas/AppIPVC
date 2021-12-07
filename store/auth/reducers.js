const initialState = {
  loading: false,
  //referentes ao user logado
  email: '',
  name: '',
  type: '',
  error: '',
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
        error: '',
      };
    case 'FETCH_AUTH_FAILURE':
      return {
        loading: false,
        user: [],
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
