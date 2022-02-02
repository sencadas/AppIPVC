import {getPlanoCurricular, address} from '../../config';
import {
  FETCH_PLAN_FAILURE,
  FETCH_PLAN_REQUEST,
  FETCH_PLAN_SUCCESS,
} from './types';

export const fetchPlanRequest = () => {
  return {
    type: FETCH_PLAN_REQUEST,
  };
};

export const fetchPlanSuccess = data => {
  return {
    type: FETCH_PLAN_SUCCESS,
    payload: data,
  };
};

export const fetchPlanFailure = error => {
  return {
    type: FETCH_PLAN_FAILURE,
    payload: error,
  };
};

const formatData = data => {
  let dataOrganized = [];
  //get ano
  for (let i = 0; i < data.length; i++) {
    if (
      !dataOrganized.some(e => e.ano === data[i].ano_curricular) &&
      data[i].ano_curricular !== undefined //Verifaicação para não acrecentar ao array as cadeiras com ano curricular undefined
    ) {
      dataOrganized.push({
        ano: data[i].ano_curricular,
        UCs: {
          primeiroSemestre: [],
          segundoSemestre: [],
        },
      });
    }
  }
  //get UCs e separa por semestre
  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < dataOrganized.length; i++) {
      if (dataOrganized[i].ano === data[j].ano_curricular) {
        if (data[j].semestre_curricular === 'S1') {
          dataOrganized[i].UCs.primeiroSemestre.push(data[j]);
        }
        if (data[j].semestre_curricular === 'S2') {
          dataOrganized[i].UCs.segundoSemestre.push(data[j]);
        }
      }
    }
  }
  //organizar a por ano
  dataOrganized.sort(function (a, b) {
    return +(a.ano > b.ano) || +(a.ano === b.ano) - 1;
  });

  return dataOrganized;
};

const procurarProxima = aulas => {
  const currentDate = new Date();
  const aulaProxima = aulas.filter(aula => {
    if (aula.startDate >= currentDate) {
      return aula;
    }
  });
  return aulaProxima[0];
};

export const getPlanosCurriculares = user => {
  const URL = getPlanoCurricular;
  var details = {
    webservice: 'GetPlanoEstudosByCurso',
    apikey: 'D0032758-23F9-4B5C-9235-7920BEE37E3C',
    parametros: `{"cd_curso":"${user.id_curso}"}`,
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      referer: 'functions',
    },
    body: formBody,
  };
  return dispatch => {
    dispatch(fetchPlanRequest());
    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(async json => {
        dispatch(fetchPlanSuccess(await formatData(json)));
      })
      .catch(error => {
        dispatch(fetchPlanFailure(error));
        console.log('Erro fetch planos: ' + error);
      });
  };
};
