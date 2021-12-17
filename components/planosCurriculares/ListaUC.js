import React from 'react';
import {List} from 'react-native-paper';
import Styles from './Styles';
import {Text, View} from 'react-native';

const ListaUC = ({data}) => {
  return (
    <View>
      <List.Item
        title={data.Unidade_Curricular}
        description={
          <View>
            <Text>
              Créditos: {data.ects ? data.ects : 'Valor não definido.'}
            </Text>
            <Text>Aulas TP: {data.TP}</Text>
            <Text>Aulas P: {data.P}</Text>
          </View>
        }
      />
    </View>
  );
};

export default ListaUC;
