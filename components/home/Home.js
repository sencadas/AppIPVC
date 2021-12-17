import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <Text>Bem vindo, {name}</Text>
    </View>
  );
};

export default Home;
