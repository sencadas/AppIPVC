import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../store/auth/actions';
import {WebView} from 'react-native-webview';

const Login = () => {
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(LoginAction(data));
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'http://appipvc.sarapaiva.webtuga.net/',
        }}
        onMessage={event => {
          let result = JSON.parse(event.nativeEvent.data);
          let user = JSON.parse(result[0].json);
          submit(user);
        }}
      />
    </View>
  );
};

export default Login;
