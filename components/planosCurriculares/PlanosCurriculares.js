import React, {useState, useEffect} from 'react';
import {List} from 'react-native-paper';
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
  const [expanded, setExpanded] = useState(true);
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

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#2fbbf0'} />
      ) : (
        <View style={styles.main}>
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
              <List.Accordion
                title={item.Unidade_Curricular}
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title={item.Ano_Curricular} />
              </List.Accordion>
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
