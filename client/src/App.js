import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChooseType from './components/ChooseType';

const App = () => {
  return (
    <View style={styles.container}>
      <ChooseType />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
