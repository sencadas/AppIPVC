import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Styles from './Styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getHorarios} from '../../store/horarios/actions';
import Loading from '../universalComponents/Loading.js';
import ProximaAulaCard from './proximaAulaCard';
import {connect} from 'react-redux';

const Home = ({data, fetchData}) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(data);

  return (
    <>
      {data.HorariosReducers.loading ? (
        <Loading />
      ) : (
        <View>
          <ScrollView>
            <Text style={Styles.welcome}>Olá {data.AuthReducers.name}</Text>
            <Text style={Styles.Title}>Próxima Aula</Text>
            <ProximaAulaCard data={data.HorariosReducers.proximaAula} />
            <Text style={Styles.Title}>Próxima Época de Avaliação</Text>
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
            <Text style={Styles.Title}>Próxima Semestre de Aulas</Text>
            <Card style={Styles.container}>
              <Card.Content>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons name={'calendar'} size={40} color={'black'} />
                  <Title style={Styles.titleClass}>2º Semestre</Title>
                </View>
                <View style={Styles.info}>
                  <Text>21 de Fevereiro a 16 de Julho</Text>
                </View>
              </Card.Content>
            </Card>
            <Text style={Styles.Title}>Notícias</Text>
            <Card style={Styles.container}>
              <Card.Cover
                source={{
                  uri: 'https://www.ipvc.pt/estg/wp-content/uploads/sites/3/2022/01/Fundadores-MainGuilty.jpg',
                }}
              />
              <Card.Content>
                <Title style={Styles.titleNews}>
                  Ex-aluno cria marca de decoração e quer recrutar no IPVC
                </Title>
                <Paragraph>
                  A MainGUILTY surgiu em plena pandemia, quando Carlos Mello,
                  ex-aluno do curso de Design de Produto da Escola Superior de
                  Tecnologia e Gestão (ESTG) do Instituto Politécnico de Viana
                  do Castelo (IPVC), se juntou ao amigo Luís Leão.
                </Paragraph>
                <Card.Actions style={Styles.button}>
                  <Button
                    onPress={() => {
                      Linking.openURL(
                        'https://www.ipvc.pt/estg/ex-aluno-cria-marca-de-decoracao-e-quer-recrutar-no-ipvc/?cli_action=1641304271.309',
                      );
                    }}>
                    Saber mais
                  </Button>
                </Card.Actions>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(getHorarios()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
