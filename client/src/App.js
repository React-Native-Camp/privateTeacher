import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChooseType from './components/ChooseType';

const App = () => {
  return (
    <View style={styles.main}>
      <ChooseType />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
});

export default App;
