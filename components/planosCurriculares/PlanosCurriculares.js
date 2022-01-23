import React, {useState, useEffect} from 'react';
import {List, Searchbar} from 'react-native-paper';
import ListaAnos from './ListaAnos';
import Styles from './assets/styles/Styles';
import Loading from '../universalComponents/Loading.js';
import {SafeAreaView, View, FlatList} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getPlanosCurriculares} from '../../store/planosCurriculares/actions';

const PlanosCurriculares = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanosCurriculares());
  }, [dispatch]);

  const data = useSelector(state => state.PlanosCurricularesReducers);

  return (
    <SafeAreaView>
      {data.loading ? (
        <Loading />
      ) : (
        <View style={Styles.container}>
          <View style={Styles.textInputView}>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <FlatList
            data={data.data}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({item}) => <ListaAnos data={item} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

/* const mapStateToProps = state => {
  return {
    data: state.PlanosCurricularesReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(getPlanosCurriculares()),
  };
}; */

export default PlanosCurriculares;
