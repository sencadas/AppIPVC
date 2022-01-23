import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Styles from './Styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loading from '../universalComponents/Loading.js';
import {getHorarios} from '../../store/horarios/actions';
import {useDispatch, useSelector} from 'react-redux';

const ProximaAulaCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHorarios());
  }, [dispatch]);

  const data = useSelector(state => state.HorariosReducers);

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <Card style={Styles.container}>
          <Card.Content>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name={'book'} size={40} color={'black'} />
              <Title style={Styles.titleClass}>
                {data.proximaAula.description}
              </Title>
            </View>
            <View style={Styles.info}>
              <Text>{data.proximaAula.professor}</Text>
              <Paragraph />
              <Paragraph>
                <Ionicons name={'time-outline'} size={14} />
                {data.proximaAula.startHour} - {data.proximaAula.endHour}
              </Paragraph>
              <Paragraph>
                <Ionicons name={'pin-outline'} size={14} />
                {data.proximaAula.summary}
              </Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default ProximaAulaCard;
