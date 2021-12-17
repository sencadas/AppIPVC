import React, {useState, useEffect} from 'react';
import {List} from 'react-native-paper';
import ListaAnos from './ListaAnos';
import Styles from './Styles';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

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

const PlanosCurriculares = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const URL = 'http://192.168.1.9:5000/api/planosCurriculares';

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setData(formatData(json.planCurr));
      })
      .catch(error => {
        throw error;
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#2fbbf0'} />
      ) : (
        <View style={Styles.container}>
          <View style={Styles.textInputView}>
            <TextInput
              placeholder={'Perquisar por disciplina...'}
              style={Styles.inputSearch}
            />
          </View>
          <List.AccordionGroup>
            <FlatList
              data={data}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({item}) => <ListaAnos data={item} />}
            />
          </List.AccordionGroup>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlanosCurriculares;
