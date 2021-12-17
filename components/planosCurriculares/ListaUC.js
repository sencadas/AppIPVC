import React from 'react';
import {List} from 'react-native-paper';
import Styles from './Styles';
import {Text, View} from 'react-native';

const ListaUC = ({data}) => {
  console.log(data);
  return (
    <View>
      {/* <List.Item
        title={data.Unidade_Curricular}
        description={
          data.Semestre_Curricular === 'S1'
            ? 'Primeiro semestre'
            : 'Segundo semestre'
        }
      /> */}
      <View style={Styles.card}>
        <Text style={Styles.cred}>
          Créditos: {data.ects ? data.ects : 'Valor não definido.'}
        </Text>
        <Text style={Styles.anoSemestre}>
          TP: {data.TP}, P: {data.P}
        </Text>
      </View>
    </View>
  );
};

export default ListaUC;
