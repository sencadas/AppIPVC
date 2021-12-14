import React from 'react';
import {View} from 'react-native';
import {Modal, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {CloseModalAction} from '../../store/horarios/actions';

const ModalSingleAula = ({aula, visible}) => {
  const dispatch = useDispatch();

  const modalStyle = {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  };

  return (
    <Modal
      visible={visible}
      onDismiss={() => dispatch(CloseModalAction())}
      contentContainerStyle={modalStyle}>
      <Text>Aula : {aula.description}</Text>
      <Text>{aula.sala}</Text>
      <Text>{aula.professor}</Text>
      <Text>
        A aula começa às {aula.startHour} e acaba às {aula.endHour}
      </Text>
    </Modal>
  );
};

export default ModalSingleAula;
