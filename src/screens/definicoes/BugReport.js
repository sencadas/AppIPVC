import {View, Button, TextInput, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card} from 'react-native-paper';
import {postBug, address} from '../../config';
import {useSelector} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';

const BugReport = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [responseStatus, setresponseStatus] = useState('');
  const [disabledState, setDisabled] = useState(false);
  const [seeAlert, setseeAlert] = useState(false);

  const fetchReduxUser = useSelector(state => state.AuthReducers.userLogged);

  useEffect(() => {
    setUser(fetchReduxUser);
  }, [fetchReduxUser]);

  const submitReport = async reportMessage => {
    if (reportMessage === '') {
      setresponseStatus('empty');
      return;
    }

    let URL = address + postBug;
    setDisabled(true);
    fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mensagem: reportMessage,
        nomeUser: user.id_utilizador,
        emailUser: user.email,
      }),
    })
      .then(response => {
        response.json().then(jsonData => {
          if (jsonData.status === true) {
            setresponseStatus('sucesso');
            setseeAlert(true);
            setText('');
          } else {
            setresponseStatus('falha');
          }
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setseeAlert(false);
        }, 2500);
        setDisabled(false);
      });
  };

  return (
    <View style={{marginTop: 70}}>
      <Card>
        <Card.Title title="Reportar um erro/sugestão:" />
        <Card.Content>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={{
              borderColor: responseStatus === 'empty' ? '#FF0000' : '#e0e0e0',
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#ffffff',
            }}
            value={text}
            onChangeText={text => setText(text)}
          />
          {responseStatus === 'empty' && (
            <Text style={{color: '#FF0000'}}>
              {' '}
              Por favor insira uma mensagem
            </Text>
          )}
        </Card.Content>
        <Card.Actions style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button
            disabled={disabledState}
            title="Enviar"
            onPress={() => {
              submitReport(text);
            }}
          />
        </Card.Actions>
      </Card>
      <AwesomeAlert
        show={seeAlert}
        showProgress={false}
        title="Feedback Enviado"
        message="A sua Contribuição é bastante importante.  Obrigado!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        useNativeDriver={true}
      />
    </View>
  );
};

export default BugReport;
