import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Styles from '../../resources/styles/customStyles/home_Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loading from '../../library/components/Loading';
import {getHorarios} from '../../store/horarios/actions';
import {useDispatch, useSelector} from 'react-redux';

const ProximaAulaCard = () => {
  const dispatch = useDispatch();
  const fetchReduxUser = useSelector(state => state.AuthReducers.userLogged);
  useEffect(() => {
    dispatch(getHorarios(fetchReduxUser));
  }, [dispatch, fetchReduxUser]);

  const data = useSelector(state => state.HorariosReducers);

  return (
    <Card style={Styles.container}>
      {data.loading ? (
        <Card.Content>
          <Loading />
        </Card.Content>
      ) : data.error ? (
        <Card.Content>
          <Text>Occurreu um erro!</Text>
        </Card.Content>
      ) : data.proximaAula.aula === undefined ? (
        <Card.Content>
          <Text>Não existe próxima aula</Text>
        </Card.Content>
      ) : (
        <Card.Content
          style={data.proximaAula.isAulaAtual ? Styles.containerSuccess : ''}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name={'book'} size={40} color={'black'} />
            <Title style={Styles.titleClass}>
              {data.proximaAula.aula.description}
            </Title>
          </View>
          <View style={Styles.info}>
            <Text>
              {data.proximaAula.aula.professor === 'N/D'
                ? 'Não tem professor associado'
                : data.proximaAula.aula.professor}
            </Text>
            <Paragraph />
            <Text style={Styles.aulaDecorrer}>
              {data.proximaAula.isAulaAtual ? 'Aula a decorrer...' : ''}
            </Text>
            <Paragraph>
              <Ionicons name={'time-outline'} size={14} />
              {data.proximaAula.aula.startHour +
                ' - ' +
                data.proximaAula.aula.endHour}
            </Paragraph>
            <Paragraph>
              <Ionicons name={'pin-outline'} size={14} />
              {data.proximaAula.aula.summary}
            </Paragraph>
          </View>
        </Card.Content>
      )}
    </Card>
  );
};

export default ProximaAulaCard;
