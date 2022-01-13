import React, {useState, useEffect} from 'react';
import {List, Searchbar} from 'react-native-paper';
import ListaAnos from './ListaAnos';
import Styles from './Styles';
import Loading from '../universalComponents/Loading.js';
import {SafeAreaView, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getPlanosCurriculares} from '../../store/planosCurriculares/actions';

const PlanosCurriculares = ({data, fetchData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <List.AccordionGroup>
            <FlatList
              data={data.data}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({item}) => <ListaAnos data={item} />}
            />
          </List.AccordionGroup>
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    data: state.PlanosCurricularesReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(getPlanosCurriculares()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanosCurriculares);
