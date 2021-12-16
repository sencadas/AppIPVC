import React, {useState, useEffect} from 'react';
import ListaAnos from './ListaAnos';
import Styles from './Styles';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const PlanosCurriculares = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const URL = 'http://192.168.1.9:5000/api/planosCurriculares';

  /* function setAnos(json) {
    for (let i = 0; i < json.length; i++) {
      if (!data.ano.includes(json[i].Ano_Curricular)) {
        setData(json[i].Ano_Curricular);
      }
    }
  } */

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setData(json.planCurr);
      })
      .catch(error => {
        throw error;
      })
      .finally(() => setLoading(false));
  }, []);

  let dataOrganized = [];
  //get ano
  for (let i = 0; i < data.length; i++) {
    if (
      !dataOrganized.some(e => e.ano === data[i].Ano_Curricular) &&
      data[i].Ano_Curricular !== undefined
    ) {
      dataOrganized.push({
        ano: data[i].Ano_Curricular,
        UCs: [],
      });
    }
  }
  //get UCs
  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < dataOrganized.length; i++) {
      if (dataOrganized[i].ano === data[j].Ano_Curricular) {
        dataOrganized[i].UCs.push(data[j]);
      }
    }
  }
  //organizar a por ano
  dataOrganized.sort(function (a, b) {
    return +(a.ano > b.ano) || +(a.ano === b.ano) - 1;
  });

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

          <FlatList
            data={dataOrganized}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({item, index}) => <ListaAnos data={item} id={index} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlanosCurriculares;
