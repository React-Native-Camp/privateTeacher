import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './components/Home';
import TeacherCourses from './components/TeacherCourses';
import PersonCard from './com/personCard';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
const App = () => {
  return (
    <View style={styles.container}>
      <TeacherCourses />
      {/* <PersonCard /> */}
    </View>
  );
};

export default App;
