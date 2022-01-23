import React from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Styles from './Styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProximaAulaCard = ({data}) => {
  return (
    <Card style={Styles.container}>
      <Card.Content>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name={'school'} size={40} color={'black'} />
          <Title style={Styles.titleClass}>Época Normal</Title>
        </View>
        <View style={Styles.info}>
          <Text>24 de Janeiro a 19 de Fevereiro</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ProximaAulaCard;
