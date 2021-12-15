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

  let anos = [];

  for (let i = 0; i < data.length; i++) {
    if (
      !anos.includes(data[i].Ano_Curricular) &&
      data[i].Ano_Curricular !== undefined
    ) {
      anos.push(data[i].Ano_Curricular);
    }
  }
  console.log(data);

  return (
    <SafeAreaView style={Styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#2fbbf0'} />
      ) : (
        <View style={Styles.main}>
          <View style={Styles.textInputView}>
            <TextInput
              placeholder={'Perquisar por disciplina...'}
              style={Styles.inputSearch}
            />
          </View>

          <FlatList
            data={anos.sort()}
            keyExtractor={({item, index}) => index}
            renderItem={({item}) => <ListaAnos ano={item} disc={data} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlanosCurriculares;
