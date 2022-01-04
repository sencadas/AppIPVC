import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, Title, Paragraph} from 'react-native-paper';
import Styles from './Styles.js';

const Home = () => {
  const [name, setName] = useState([]);

  try {
    AsyncStorage.getItem('name').then(value => {
      setName(value);
    });
  } catch (e) {
    console.log(e);
  }

  return (
    <View>
      <Text style={Styles.welcome}>Olá {name}</Text>
      <Card style={Styles.container}>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Home;
