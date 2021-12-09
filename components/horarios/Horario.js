import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import WeekView from './react-native-week-view/index.js';

const start = new Date('2021-12-15T11:00:00.000Z');

const end = new Date('2021-12-15T12:00:00.000Z');

const sampleEvents = [
  {
    _id: '61afdf126a438092fdccc04d',
    allInfo: '3003029-Projecto III-P III-TP-TP1-Aula 9119.3.3003029-TP-1',
    color: '#cccccc',
    description: 'P III',
    id: '105228',
    idEstado: '1',
    professor:
      'António Miguel Ribeiro dos Santos Rosado da Cruz; Jorge Manuel Ferreira Barbosa Ribeiro',
    summary: 'ESTG - S.3.5',
    tipoAula: 'TP1',
    userProf: 'jribeiro; miguel.cruz',
    startDate: start,
    endDate: end,
  },
];

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

class Horario extends React.Component {
  state = {
    events: sampleEvents,
    selectedDate: new Date(),
  };

  getAulasFromApiAsync = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/api/aulas/');
      const json = await response.json();

      let horarios = [];

      for (let i = 0; i < json.aulas.length; i++) {
        horarios.push(parseObject(json.aulas[i]));
      }

      this.setState({events: horarios});
    } catch (error) {
      console.error(error);
    }
  };

  //quando a página está loaded
  componentDidMount() {
    this.getAulasFromApiAsync();
  }

  //quando clicar no evento
  onEventPress = ({id, color, startDate, endDate}) => {};

  //isRefreshing - para colocar a variavel do isLoading
  render() {
    const {events, selectedDate} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <WeekView
            ref={r => {
              this.componentRef = r;
            }}
            events={events}
            selectedDate={selectedDate}
            numberOfDays={6}
            onEventPress={this.onEventPress}
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
  }
}

const styles = StyleSheet.create({
  container: {
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
