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
      !dataOrganized.some(e => e.ano === data[i].Ano_Curricular) &&
      data[i].Ano_Curricular !== undefined
    ) {
      dataOrganized.push({
        ano: data[i].Ano_Curricular,
        UCs: {
          primeiroSemestre: [],
          segundoSemestre: [],
        },
      });
    }
  }
  //get UCs e epara por semestre
  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < dataOrganized.length; i++) {
      if (dataOrganized[i].ano === data[j].Ano_Curricular) {
        if (data[j].Semestre_Curricular === 'S1') {
          dataOrganized[i].UCs.primeiroSemestre.push(data[j]);
        }
        if (data[j].Semestre_Curricular === 'S2') {
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

export const getPlanosCurriculares = () => {
  const URL = address + getPlanoCurricular;

  return dispatch => {
    dispatch(fetchPlanRequest());
    fetch(URL)
      .then(response => response.json())
      .then(async json => {
        dispatch(fetchPlanSuccess(await formatData(json.planCurr)));
      })
      .catch(error => {
        dispatch(fetchPlanFailure(error));
      });
  };
};
