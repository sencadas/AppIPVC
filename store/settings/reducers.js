const initialState = {
  //rota atual, ter cuidado pq se o user já estiver logado automaticamente redireciona para a pagina de resumo
  HorariotypeOfView: 6,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_HORARIO_VIEW':
      return {
        HorariotypeOfView: action.HorariotypeOfView,
      };
    default:
      return state;
  }
};
