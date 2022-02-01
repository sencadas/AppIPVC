import {getAulas} from '../../config';
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
  let year = stringDate.slice(0, 4);
  let month = stringDate.slice(5, 7);
  let day = stringDate.slice(8, 10);
  let hours = stringDate.slice(11, 13);
  let minutes = stringDate.slice(14, 16);

  const date = new Date(year, month - 1, day, hours, minutes);

  if (type === 1) {
    return date;
  } else {
    let hours_minutes = hours + ':' + minutes;
    return hours_minutes;
  }
};
//parametros anteriores (hours e minutes).

const parseObject = (json, id) => {
  const objectParsed = {
    id: id,
    color: json.cor_valor,
    description: json.sigla,
    idEstado: json.id_estado,
    professor: json.nomesDocentes,
    summary: json.sala,
    tipoAula: json.hor_nome_turno,
    userProf: json.emailsDocentes,
    startDate: parseDate(json.data_hora_ini, 1),
    endDate: parseDate(json.data_hora_fim, 1),
    startHour: parseDate(json.data_hora_ini, 0),
    endHour: parseDate(json.data_hora_fim, 0),
  };

  return objectParsed;
};

const procurarAulaAtual = aulas => {
  const currentDate = new Date();
  //Filtra as aulas futuras
  const aulaProxima = aulas.filter(aula => {
    if (currentDate <= aula.endDate) {
      return aula;
    }
  });
  //Variavel para saber se a aula está a decorrer
  let isAulaAtual = false;
  if (aulaProxima.length > 0) {
    isAulaAtual = currentDate >= aulaProxima[0].startDate;
  }
  //retorna a apenas a aula mais proxima pois temos um array ordenado e a variavel se está a decorrer ou não
  return {
    aula: aulaProxima[0],
    isAulaAtual: isAulaAtual,
  };
};

export const getHorarios = user => {
  const URL = getAulas;
  console.log(user);
  var details = {
    webservice: 'GetHorarioByAluno',
    apikey: 'D0032758-23F9-4B5C-9235-7920BEE37E3C',
    parametros: `{"cd_lectivo":"202122","semestre":"S1","cd_aluno":"${user.num_utilizador}"}`,
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
    dispatch(fetchHorarioRequest());
    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(async json => {
        let horarios = [];

        for (let i = 0; i < json.length; i++) {
          let eventId = i;
          horarios.push(await parseObject(json[i], eventId));
        }

        const proximaAula = await procurarAulaAtual(horarios);

        dispatch(fetchHorarioSuccess(horarios, proximaAula));
      })
      .catch(error => {
        dispatch(fetchHorarioFailure(error));
      });
  };
};
