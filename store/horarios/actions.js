import {getAulas, address} from '../../config';
import {
  FETCH_HORARIO_FAILURE,
  FETCH_HORARIO_REQUEST,
  FETCH_HORARIO_SUCCESS,
} from './types';

export const fetchHorarioRequest = () => {
  return {
    type: FETCH_HORARIO_REQUEST,
  };
};

export const fetchHorarioSuccess = (data, proximaAula) => {
  return {
    type: FETCH_HORARIO_SUCCESS,
    payload: {
      data: data,
      proximaAula: proximaAula,
    },
  };
};

export const fetchHorarioFailure = error => {
  return {
    type: FETCH_HORARIO_FAILURE,
    payload: error,
  };
};

//se type = 1 retorna a data senão retorna a hora e minutos
const parseDate = (stringDate, type) => {
  let hours = stringDate.substr(11, 2);
  let minutes = stringDate.substr(14, 2);

  let day = stringDate.substring(0, 2);
  let month = stringDate.substring(3, 5);
  let year = stringDate.substr(6, 4);

  const date = new Date(year, month - 1, day, hours, minutes);

  if (type === 1) {
    return date;
  } else {
    let hours_minutes = hours + ':' + minutes;
    return hours_minutes;
  }
};
//parametros anteriores (hours e minutes).

const parseObject = json => {
  const objectParsed = {
    _id: json._id,
    color: json.color,
    description: json.description,
    id: json.id,
    idEstado: json.idEstado,
    professor: json.professor,
    summary: json.summary,
    tipoAula: json.tipoAula,
    userProf: json.userProf,
    startDate: parseDate(json.startDate, 1),
    endDate: parseDate(json.endDate, 1),
    startHour: parseDate(json.startDate, 0),
    endHour: parseDate(json.endDate, 0),
  };

  return objectParsed;
};

const procurarAulaAtual = aulas => {
  const currentDate = new Date();
  const aulaProxima = aulas.filter(aula => {
    if (aula.startDate >= currentDate) {
      return aula;
    }
  });
  return aulaProxima[0];
};

export const getHorarios = () => {
  const URL = address + getAulas;
  return dispatch => {
    dispatch(fetchHorarioRequest());
    fetch(URL)
      .then(response => response.json())
      .then(async json => {
        let horarios = [];

        for (let i = 0; i < json.aulas.length; i++) {
          horarios.push(await parseObject(json.aulas[i]));
        }

        const proximaAula = await procurarAulaAtual(horarios);

        dispatch(fetchHorarioSuccess(horarios, proximaAula));
      })
      .catch(error => {
        dispatch(fetchHorarioFailure(error));
      });
  };
};
