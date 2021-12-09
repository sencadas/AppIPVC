import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {OpenModalAction} from '../../store/horarios/actions';
import WeekView from './react-native-week-view/index.js';
import {useDispatch} from 'react-redux';

const parseDate = stringDate => {
  let day = stringDate.substring(0, 2);
  let month = stringDate.substring(3, 5);
  let year = stringDate.substr(6, 4);
  let hours = stringDate.substr(11, 2);
  let minutes = stringDate.substr(14, 2);

  const date = new Date(year, month - 1, day, hours, minutes);

  return date;
};
//parametros anteriores (hours e minutes)

const parseObject = json => {
  const objectParsed = {
    _id: json._id,
    allInfo: json.allInfo,
    color: json.color,
    description: json.description,
    id: json.id,
    idEstado: json.idEstado,
    professor: json.professor,
    summary: json.summary,
    tipoAula: json.tipoAula,
    userProf: json.userProf,
    startDate: parseDate(json.startDate),
    endDate: parseDate(json.endDate),
  };

  return objectParsed;
};

const MyRefreshComponent = ({style}) => (
  // Just an example
  <ActivityIndicator style={style} color="red" size="large" />
);

const Horario = () => {
  const [events, setEvents] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setLoading] = useState(true);

  const URL = 'http://10.0.2.2:5000/api/aulas/';

  const dispatch = useDispatch();

  //fetching info
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        let horarios = [];

        for (let i = 0; i < json.aulas.length; i++) {
          horarios.push(parseObject(json.aulas[i]));
        }

        setEvents(horarios);
      })
      .catch(error => {
        throw error;
      })
      .finally(() => setLoading(false));
  }, []);

  // const onEventPress = ({id, color, description, startDate, endDate}) => {};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WeekView
          events={events}
          selectedDate={selectedDate}
          numberOfDays={6}
          onEventPress={dispatch(OpenModalAction())}
          headerStyle={styles.header}
          headerTextStyle={styles.headerText}
          hourTextStyle={styles.hourText}
          eventContainerStyle={styles.eventContainer}
          formatDateHeader={'ddd DD'}
          hoursInDisplay={12}
          showNowLine={false}
          timeStep={60}
          startHour={9}
          weekStartsOn={1}
          fixedHorizontally={false}
          showTitle={true}
          isRefreshing={false}
          RefreshComponent={MyRefreshComponent}
        />
      </SafeAreaView>
    </>
  );
};

export default Horario;
