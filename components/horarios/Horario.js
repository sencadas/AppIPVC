import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Portal, Provider, Button} from 'react-native-paper';
// components used
import WeekView from './react-native-week-view/index.js';
import Loading from '../universalComponents/Loading.js';
import ModalSingleAula from './modalSingleAula';
import ModalDatePicker from './modalDatePicker';
import {getHorarios} from '../../store/horarios/actions';
import {useDispatch, useSelector} from 'react-redux';

const Horario = () => {
  const [seeModal, setSeeModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [aulaPressed, setAulaPressed] = useState('');

  let weekViewRef;

  //fetching info
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHorarios());
  }, [dispatch]);

  const data = useSelector(state => state.HorariosReducers);

  const seeAulaModal = useCallback(
    aula => {
      setAulaPressed(aula);
      setSeeModal(true);
    },
    [setAulaPressed, setSeeModal],
  );

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

    seeAulaModal(aula);
  };

  const changeDate = date => {
    console.log(date);
    weekViewRef.goToDate(date, true);
    setSelectedDate(date);
  };

  return (
    <>
      {data.loading === true ? (
        <Loading />
      ) : (
        <Provider>
          <Portal>
            {seeModal === true && (
              <ModalSingleAula
                visible={seeModal}
                aula={aulaPressed}
                setModal={setSeeModal}
              />
            )}
          </Portal>
          <StatusBar barStyle="dark-content" />
          <ModalDatePicker
            selectedDate={selectedDate}
            changeDate={changeDate}
          />
          <SafeAreaView style={styles.container}>
            <WeekView
              ref={ref => {
                weekViewRef = ref;
              }}
              events={data.data}
              selectedDate={selectedDate}
              numberOfDays={6}
              onEventPress={onEventPress}
              headerStyle={styles.header}
              headerTextStyle={styles.headerText}
              hourTextStyle={styles.hourText}
              eventContainerStyle={styles.eventContainer}
              formatDateHeader={'ddd DD'}
              hoursInDisplay={10}
              showNowLine={false}
              timeStep={60}
              startHour={9}
              weekStartsOn={1}
              fixedHorizontally={false}
              showTitle={true}
              isRefreshing={false}
              locale={'pt'}
            />
          </SafeAreaView>
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
