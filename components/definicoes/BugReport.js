import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Card, TextInput} from 'react-native-paper';

const BugReport = () => {
  const [text, setText] = useState('');

  return (
    <View style={{marginTop: 70}}>
      <Card>
        <Card.Title title="Reportar um erro/sugestão:" />
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
          <Button>Enviar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default BugReport;
