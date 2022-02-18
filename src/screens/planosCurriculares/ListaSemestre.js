import React, {useState} from 'react';
import {List} from 'react-native-paper';
import Styles from '../../resources/styles/customStyles/planosCurriculares_Style';

import ListaUC from './ListaUC';
import {FlatList, View} from 'react-native';

const ListaSemestre = ({primeiroSemestre, segundoSemestre}) => {
  return (
    <>
      <List.Accordion title="Primeiro semestre">
        <FlatList
          data={primeiroSemestre}
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => <ListaUC data={item} />}
        />
      </List.Accordion>
      <List.Accordion title="Segundo semestre">
        <FlatList
          data={segundoSemestre}
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => <ListaUC data={item} />}
        />
      </List.Accordion>
    </>
  );
};

export default ListaSemestre;
