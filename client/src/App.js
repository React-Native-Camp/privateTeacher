import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginScreen from './components/screens/MainScreen/LoginScreen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

export default App;
