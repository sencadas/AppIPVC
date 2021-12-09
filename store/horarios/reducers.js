const initialState = {
  //rota atual, ter cuidado pq se o user já estiver logado automaticamente redireciona para a pagina de resumo
  visible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL_SINGLE_AULA':
      return {
        actualRoute: action.visible,
      };
    case 'OPEN_MODAL_SINGLE_AULA':
      return {
        actualRoute: action.visible,
      };
    default:
      return state;
  }
};
