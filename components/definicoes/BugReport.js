import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Card, TextInput} from 'react-native-paper';
import {postBug, address} from '../../config';
import {useSelector} from 'react-redux';

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
          } else {
            setresponseStatus('falha');
          }
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setseeAlert(true);
        setDisabled(false);
      });
  };

  return (
    <View style={{marginTop: 70}}>
      <Card>
        <Card.Title title="Reportar um erro/sugestão:" />
        {responseStatus === 'empty' && <Card.Title title="Erro Empty" />}
        <Card.Content>
          <TextInput
            style={{backgroundColor: '#ffffff'}}
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={text => setText(text)}
          />
        </Card.Content>
        <Card.Actions style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button
            disabled={disabledState}
            mode="contained"
            onPress={() => {
              submitReport(text);
            }}>
            Enviar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default BugReport;
