import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Card, TextInput} from 'react-native-paper';

const BugReport = () => {
  const [text, setText] = useState('');

  return (
    <View style={{marginTop: 70}}>
      <Card>
        <Card.Title title="Reportar um bug:" />
        <Card.Content>
          <TextInput
            style={{backgroundColor: '#ffffff'}}
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={text => setText(text)}
          />
        </Card.Content>
        <Card.Actions>
          <Button style={{alignSelf: 'flex-end'}}>Enviar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default BugReport;
