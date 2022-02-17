import React, {useState, useEffect} from 'react';
import {List, Searchbar} from 'react-native-paper';
import ListaAnos from './ListaAnos';
import Styles from './assets/styles/Styles';
import Loading from '../universalComponents/Loading.js';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPlanosCurriculares} from '../../store/planosCurriculares/actions';

const PlanosCurriculares = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [arrayFiltered, setArrayFiltered] = useState('');
  const fetchReduxUser = useSelector(state => state.AuthReducers.userLogged);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanosCurriculares(fetchReduxUser));
  }, [dispatch, fetchReduxUser]);

  const data = useSelector(state => state.PlanosCurricularesReducers);

  const searchPlano = query => {
    let infoParsed = [];

    data.data.forEach(Ano => {
      let filteredAno = {
        ano: Ano.ano,
        UCs: {
          primeiroSemestre: [],
          segundoSemestre: [],
        },
      };

      const filteredPrimeiroSemestre = Ano.UCs.primeiroSemestre.filter(
        curso => {
          return curso.nm_unidade_curricular.includes(query);
        },
      );

      const filteredSegundoSemestre = Ano.UCs.segundoSemestre.filter(curso => {
        return curso.nm_unidade_curricular.includes(query);
      });

      if (
        filteredPrimeiroSemestre.length !== 0 ||
        filteredSegundoSemestre.length !== 0
      ) {
        filteredAno.UCs.primeiroSemestre = filteredPrimeiroSemestre;

        filteredAno.UCs.segundoSemestre = filteredSegundoSemestre;

        infoParsed.push(filteredAno);
      }
    });

    setArrayFiltered(infoParsed);
  };

  const onChangeSearch = query => {
    console.log(query);
    setSearchQuery(query);
    searchPlano(query);
  };

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <SafeAreaView>
          <View style={Styles.container}>
            <View style={Styles.textInputView}>
              <Searchbar
                placeholder="Pesquisar"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
            <FlatList
              data={searchQuery === '' ? data.data : arrayFiltered}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({item}) => <ListaAnos data={item} />}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default PlanosCurriculares;
