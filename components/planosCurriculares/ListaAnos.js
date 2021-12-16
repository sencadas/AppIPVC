import React, {useState} from 'react';
import {List} from 'react-native-paper';
import Styles from './Styles';
import {FlatList, Text, View} from 'react-native';

const ListaAnos = ({data, id}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.AccordionGroup title="Disciplinas">
      <List.Accordion
        title={data.ano + 'º ano'}
        id={data.ano}
        expanded={expanded}
        onPress={handlePress}>
        <FlatList
          data={data.UCs}
          keyExtractor={({item, index}) => index}
          listKey={(item, index) => 'D' + index.toString()}
          renderItem={({item, index}) => (
            <View>
              <List.Item
                title={item.Unidade_Curricular}
                description={
                  item.Semestre_Curricular === 'S1'
                    ? 'Primeiro semestre'
                    : 'Segundo semestre'
                }
                key={index}
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
