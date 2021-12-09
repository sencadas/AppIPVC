import React, {useState, useEffect} from 'react';

import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {CloseModalAction} from '../../store/horarios/actions';
import {store} from '../../store/store';

const ModalSingleAula = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const containerStyle = {backgroundColor: 'white', padding: 20};

  store.subscribe(() => {
    setVisible(store.getState().HorariosReducers.visible);
  });

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={dispatch(CloseModalAction())}
        contentContainerStyle={containerStyle}>
        <Text>hehegh</Text>
      </Modal>
    </Portal>
  );
};

export default ModalSingleAula;
