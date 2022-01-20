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
          <Ionicons name={'book'} size={40} color={'black'} />
          <Title style={Styles.titleClass}>{data.description}</Title>
        </View>
        <View style={Styles.info}>
          <Text>{data.professor}</Text>
          <Paragraph />
          <Paragraph>
            <Ionicons name={'time-outline'} size={14} />
            {data.startHour} - {data.endHour}
          </Paragraph>
          <Paragraph>
            <Ionicons name={'pin-outline'} size={14} />
            {data.summary}
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ProximaAulaCard;
