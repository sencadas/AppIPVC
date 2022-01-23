import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import Styles from './assets/styles/Styles.js';
import {useSelector} from 'react-redux';

const Perfil = () => {
  const fetchReduxUser = useSelector(state => state.AuthReducers);
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(fetchReduxUser);
  }, [fetchReduxUser]);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <View style={Styles.profileImage}>
            <Image
              source={require('./assets/imgs/perfil.png')}
              style={Styles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={Styles.infoContainer}>
          <Text style={Styles.textName}>{user.nome}</Text>
          <Text style={Styles.text}>{user.unidade_organica}</Text>
          <Text style={Styles.text}>Aluno Nº {user.num_utilizador}</Text>
          <Text style={Styles.text}>
            [{user.id_curso}] Engenharia Informática
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfil;
