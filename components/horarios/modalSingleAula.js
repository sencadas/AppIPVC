import React from 'react';
import {Modal, Text} from 'react-native-paper';

const ModalSingleAula = ({aula, visible, setModal}) => {
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
      onDismiss={() => setModal(false)}
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
