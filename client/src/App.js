import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './components/screens/MainScreen/LoginScreen';
import ChooseType from './components/screens/MainScreen/ChooseType';
import TeacherCourses from './components/screens/AuthScreen/TeacherCourses';
import TeacheProfile from './components/screens/AuthScreen/TeacheProfile';
import HomeScreen from './components/screens/MainScreen/HomeScreen';
import ConfirmScrren from '../src/components/screens/AuthScreen/ConfirmScreen';

import {useDispatch, useSelector} from 'react-redux';
import {fetchDemo} from './actions/demoAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDemo());
  // }, []);

  const users = useSelector((state) => state.demo.users);
  return (
    <SafeAreaView style={styles.container}>
      {/* <TeacherCourses /> */}
      {/* <PersonCard /> */}
      {/* <ChooseType />*/}
      {/*  <LoginScreen /> */}
      {/* <HomeScreen /> */}
      <TeacheProfile />
      {/* <Text>Private Teacher</Text>
      {users?.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })} */}
    </SafeAreaView>
  );
};

export default App;
