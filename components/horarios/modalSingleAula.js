import React, {useState, useEffect} from 'react';

import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';

const ModalSingleAula = () => {
  const [visible, setVisible] = useState(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>hehegh</Text>
      </Modal>
    </Portal>
  );
};

export default ModalSingleAula;
