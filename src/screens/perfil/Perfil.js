import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import Styles from '../../resources/styles/customStyles/perfil_Style';
import {useSelector} from 'react-redux';
import R from '../../resources/index';

const Perfil = () => {
  const fetchReduxUser = useSelector(state => state.AuthReducers.userLogged);
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(fetchReduxUser);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <View style={Styles.profileImage}>
            <Image
              source={R.images.perfil}
              style={Styles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={Styles.infoContainer}>
          <Text style={Styles.textName}>{user.nome}</Text>
          <Text style={Styles.text}>{user.unidade_organica}</Text>
          <Text style={Styles.text}>Aluno Nº {user.num_utilizador}</Text>
          <Text style={Styles.text}>Email: {user.email}</Text>
          <Text style={Styles.text}>
            [{user.id_curso}] Engenharia Informática
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Perfil;
