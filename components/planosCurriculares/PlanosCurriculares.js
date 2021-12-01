import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const PlanosCurriculares = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const URL = 'http://localhost:5000/api/planosCurriculares';

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setData(json.planCurr);
      })
      .catch(error => {
        console.log('aqui');
        throw error;
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#2fbbf0'} />
      ) : (
        <View style={styles.main}>
          <Text style={styles.header}>Planos Curriculares</Text>
          <View style={styles.textInputView}>
            <TextInput
              placeholder={'Perquisar por disciplina...'}
              style={styles.inputSearch}
            />
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.titleCard}>{item.Unidade_Curricular}</Text>
                <Text style={styles.cred}>Créditos: {item.ects}</Text>
                <Text style={styles.anoSemestre}>
                  Ano: {item.Ano_Curricular}, {item.Semestre_Curricular}
                </Text>
                <Text style={styles.anoSemestre}>
                  TP: {item.TP}, P: {item.P}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    width: '100%',
    flex: 1,
  },
  header: {
    fontSize: 40,
    marginLeft: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#ebebeb',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  Text: {
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  item: {
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  titleCard: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputSearch: {
    marginTop: 13,
    height: 39,
    width: '90%',
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    paddingLeft: 15,
  },
  textInputView: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default PlanosCurriculares;
