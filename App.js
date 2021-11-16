import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, StatusBar, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>Hello World</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
