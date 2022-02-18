import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Portal, Provider} from 'react-native-paper';
import styles from '../../resources/styles/customStyles/horario_Style';

import WeekView from './react-native-week-view/index.js';
import Loading from '../../library/components/Loading';

import ModalSingleAula from './modalSingleAula';
import ModalDatePicker from './modalDatePicker';
import {getHorarios} from '../../store/horarios/actions';
import {useDispatch, useSelector} from 'react-redux';

const Horario = () => {
  const [seeModal, setSeeModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [aulaPressed, setAulaPressed] = useState('');

  const data = useSelector(state => state.HorariosReducers);
  const typeOfView = useSelector(
    state => state.SettingsReducers.HorariotypeOfView,
  );
  const fetchReduxUser = useSelector(state => state.AuthReducers.userLogged);

  let weekViewRef;

  //fetching info
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHorarios(fetchReduxUser));
  }, [dispatch, fetchReduxUser]);

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
              numberOfDays={typeOfView}
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

export default Horario;
