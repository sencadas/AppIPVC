import React, {useState} from 'react';
import {List} from 'react-native-paper';
import {FlatList, Text, View} from 'react-native';

const ListaAnos = ({ano, disc}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  console.log(disc[47].Ano_Curricular);
  console.log(ano);

  return (
    <List.Accordion
      title={ano + 'º ano'}
      expanded={expanded}
      onPress={handlePress}>
      <FlatList
        data={disc}
        keyExtractor={({item, index}) => index}
        renderItem={({item}) =>
          item.Ano_Curricular === ano ? (
            <View>
              <List.Item title={item.Unidade_Curricular} />
              <Text>oii</Text>
            </View>
          ) : null
        }
      />
    </List.Accordion>
  );
};

export default ListaAnos;
