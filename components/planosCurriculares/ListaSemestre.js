import React, {useState} from 'react';
import {List} from 'react-native-paper';
import Styles from './Styles';
import ListaUC from './ListaUC';
import {FlatList, View} from 'react-native';

const ListaSemestre = ({primeiroSemestre, segundoSemestre}) => {
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const handlePressPrimeiroSemestre = () => setExpanded1(!expanded1);
  const handlePressSegundoSemestre = () => setExpanded2(!expanded2);
  console.log(expanded1);

  return (
    <>
      <List.Item
        title="Primeiro semestre"
        onPress={handlePressPrimeiroSemestre}
      />
      {expanded1 === true ? (
        <FlatList
          data={primeiroSemestre}
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => <ListaUC data={item} />}
        />
      ) : null}
      <List.Item
        title="Segundo semestre"
        onPress={handlePressSegundoSemestre}
      />
      {expanded2 === true ? (
        <FlatList
          data={segundoSemestre}
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => <ListaUC data={item} />}
        />
      ) : null}
    </>
  );
};

export default ListaSemestre;
