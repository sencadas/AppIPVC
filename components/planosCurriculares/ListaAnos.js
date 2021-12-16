import React, {useState} from 'react';
import {List} from 'react-native-paper';
import Styles from './Styles';
import {FlatList, Text, View, SafeAreaView} from 'react-native';

const ListaAnos = ({data, id}) => {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.AccordionGroup key={id}>
      <List.Accordion
        title={data.ano + 'º ano'}
        id={data.ano}
        expanded={expanded}
        onPress={handlePress}>
        <FlatList
          data={data.UCs}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          listKey={(item, index) => index}
          renderItem={({item, index}) => (
            <View>
              <List.Item
                title={item.Unidade_Curricular}
                description={
                  item.Semestre_Curricular === 'S1'
                    ? 'Primeiro semestre'
                    : 'Segundo semestre'
                }
              />
              <View style={Styles.card}>
                <Text style={Styles.cred}>
                  Créditos: {item.ects ? item.ects : 'Valor não definido.'}
                </Text>
                <Text style={Styles.anoSemestre}>
                  TP: {item.TP}, P: {item.P}
                </Text>
              </View>
            </View>
          )}
        />
      </List.Accordion>
    </List.AccordionGroup>
  );
};

export default ListaAnos;
