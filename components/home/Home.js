import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  const [name, setName] = useState([]);
  PushNotification.createChannel({
    channelId: 'test-channel',
    channelName: 'Test Channel',
  });

  try {
    AsyncStorage.getItem('name').then(value => {
      setName(value);
    });
  } catch (e) {
    console.log(e);
  }

  const handelNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Teste',
      message: 'sdsddsds',
    });
  };

  return (
    <View>
      <Text>Bem vindo, {name}</Text>
      <Button title="Press me" onPress={() => handelNotification()} />
    </View>
  );
};

export default Home;
