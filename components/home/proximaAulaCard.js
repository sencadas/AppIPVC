import React from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Styles from './Styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loading from '../universalComponents/Loading.js';

const ProximaAulaCard = ({data}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const procurarAulaAtual = aulas => {
    const currentDate = new Date();
    const aulaProxima = aulas.filter(aula => {
      if (aula.startDate >= currentDate) {
        return aula;
      }
    });
    setIsLoading(false);
    return aulaProxima[0];
  };

  const aulaAtual = procurarAulaAtual(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Card style={Styles.container}>
          <Card.Content>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name={'book'} size={40} color={'black'} />
              <Title style={Styles.titleClass}>{aulaAtual.description}</Title>
            </View>
            <View style={Styles.info}>
              <Text>{aulaAtual.professor}</Text>
              <Paragraph />
              <Paragraph>
                <Ionicons name={'time-outline'} size={14} />
                {aulaAtual.startHour} - {aulaAtual.endHour}
              </Paragraph>
              <Paragraph>
                <Ionicons name={'pin-outline'} size={14} />
                {aulaAtual.summary}
              </Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default ProximaAulaCard;
