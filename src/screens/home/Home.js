import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import Styles from '../../resources/styles/customStyles/home_Style';
import ProximaAulaCard from './proximaAulaCard';
import ProximaEpocaCard from './proximaEpocaCard';

const Home = () => {
  return (
    <View>
      <ScrollView>
        <Text style={Styles.Title}>Próxima Aula</Text>
        <ProximaAulaCard />
        <Text style={Styles.Title}>Próxima Época de Avaliação</Text>
        <ProximaEpocaCard />

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
              Tecnologia e Gestão (ESTG) do Instituto Politécnico de Viana do
              Castelo (IPVC), se juntou ao amigo Luís Leão.
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
  );
};

export default Home;
