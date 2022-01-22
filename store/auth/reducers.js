const initialState = {
  loading: false,
  //referentes ao user logado
  email: null,
  nome: null,
  id_curso: null,
  unidade_orcanica: null,
  num_utilizador: null,
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
        nome: action.payload.nome,
        id_curso: action.payload.id_curso,
        unidade_orcanica: action.payload.unidade_organica,
        num_utilizador: action.payload.num_utilizador,
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
