const initialState = {
  loading: false,
  user: {},
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
        user: action.payload,
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
