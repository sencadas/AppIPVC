import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles.js';

const Perfil = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <View style={Styles.profileImage}>
            <Image
              source={require('./perfil.jpeg')}
              style={Styles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={Styles.infoContainer}>
          <Text style={Styles.textName}>Gonçalo Afonso</Text>
          <Text style={Styles.text}>
            Escola Superior de Gestão do Instituto Politécnico de Viana do
            Castelo
          </Text>
          <Text style={Styles.text}>Aluno Nº 23826</Text>
          <Text style={Styles.text}>[9119] Engenharia Informática</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfil;
