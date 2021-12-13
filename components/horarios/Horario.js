import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {OpenModalAction} from '../../store/horarios/actions';
import WeekView from './react-native-week-view/index.js';
import {useDispatch} from 'react-redux';
import ModalSingleAula from './modalSingleAula';
import {store} from '../../store/store';
import {Portal, Provider} from 'react-native-paper';
import Loading from '../universalComponents/Loading.js';

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
//parametros anteriores (hours e minutes)

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

const MyRefreshComponent = ({style}) => (
  // Just an example
  <ActivityIndicator style={style} color="red" size="large" />
);

const Horario = () => {
  const [seeModal, setSeeModal] = useState(false);
  const [events, setEvents] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setLoading] = useState(true);
  const [aulaPressed, setAulaPressed] = useState('');

  const URL = 'http://10.0.2.2:5000/api/aulas/';

  const dispatch = useDispatch();

  store.subscribe(() => {
    setSeeModal(store.getState().HorariosReducers.visible);
  });

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

  const onEventPress = ({
    id,
    summary,
    professor,
    description,
    startHour,
    endHour,
  }) => {
    let aula = {
      id: id,
      description: description,
      startHour: startHour,
      endHour: endHour,
      sala: summary,
      professor: professor,
    };

    setAulaPressed(aula);
    dispatch(OpenModalAction());
  };

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <Provider>
          <Portal>
            {seeModal === true && (
              <ModalSingleAula visible={seeModal} aula={aulaPressed} />
            )}
          </Portal>
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
              <WeekView
                events={events}
                selectedDate={selectedDate}
                numberOfDays={6}
                onEventPress={onEventPress}
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
          </View>
        </Provider>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#4286f4',
    borderColor: '#fff',
  },
  headerText: {
    color: 'white',
  },
  hourText: {
    color: 'black',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Horario;
