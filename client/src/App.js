import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import ConfirmScrren from './components/screens/AuthScreen/ConfirmScreen';
import StudentProfile from './components/screens/AuthScreen/StudentProfile';
import HomeScrren from './components/screens/MainScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './navigation/AuthNavigation';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemo} from './actions/demoAction';
import navigationTheme from './navigation/navigationTheme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
const App = () => {
  // const dispatch = useDispatch();
  // const authdata = useSelector((state) => state);
  // useEffect(() => {
  //   dispatch(fetchDemo());
  // }, []);

  // const users = useSelector((state) => state);
  // console.log(' appstate', users);
  return (
    <SafeAreaView style={styles.container}>
      {/* <TeacherCourses /> */}
      {/* <PersonCard /> */}
      {/* <ChooseType /> */}
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      {/* <ConfirmScrren /> */}
      {/* <StudentProfile /> */}
      {/* <Text>Private Teacher</Text>
      {users?.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })} */}

      <NavigationContainer theme={navigationTheme}>
        <AuthNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
