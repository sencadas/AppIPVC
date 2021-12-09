const initialState = {
  //rota atual, ter cuidado pq se o user já estiver logado automaticamente redireciona para a pagina de resumo
  actualRoute: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAVIGATION':
      return {
        actualRoute: action.actualRoute,
      };
    default:
      return state;
  }
};
