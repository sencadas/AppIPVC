import React, {useState, useEffect} from 'react';
import {List, Searchbar} from 'react-native-paper';
import ListaAnos from './ListaAnos';
import Styles from './Styles';
import {SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native';
import {getPlanoCurricular, address} from '../../config';

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
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const URL = address + getPlanoCurricular;

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

  /* const pesquisar = ({item}) => {
    // when no input, show all
    if (data.searchPhrase === '') {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(data.searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
  }; */

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#2fbbf0'} />
      ) : (
        <View style={Styles.container}>
          <View style={Styles.textInputView}>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery}
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
