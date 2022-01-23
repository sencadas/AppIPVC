import React, {useState} from 'react';
import {List} from 'react-native-paper';
import Styles from './assets/styles/Styles';
import ListaSemestre from './ListaSemestre';
import View from 'react-native';

const ListaAnos = ({data}) => {
  return (
    <List.Accordion
      id={data.ano}
      title={data.ano + 'º ano'}
      left={props => <List.Icon {...props} icon="folder" />}>
      <ListaSemestre
        primeiroSemestre={data.UCs.primeiroSemestre}
        segundoSemestre={data.UCs.segundoSemestre}
      />
    </List.Accordion>
  );
};

export default ListaAnos;
