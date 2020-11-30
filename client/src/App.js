// import React, {useEffect} from 'react';
// import {Text, SafeAreaView, StyleSheet} from 'react-native';
// import LoginScreen from './components/screens/MainScreen/LoginScreen';
// import ChooseType from './components/screens/MainScreen/ChooseType';
// import TeacherCourses from './components/screens/AuthScreen/TeacherCourses';
// import HomeScreen from './components/screens/MainScreen/HomeScreen';
// import ConfirmScrren from '../src/components/screens/AuthScreen/ConfirmScreen';
// import {createStackNavigator} from '@react-navigation/stack';

// import {NavigationContainer} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchDemo} from './actions/demoAction';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//   },
// });
// const App = () => {
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(fetchDemo());
//   // }, []);

//   const Stack = createStackNavigator();
//   const StackNavigator = () => (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ChooseType"
//         component={ChooseType}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="TeacherCourses"
//         component={TeacherCourses}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ConfirmScrren"
//         component={ConfirmScrren}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
//   const users = useSelector((state) => state.demo.users);
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <TeacherCourses /> */}
//       {/* <PersonCard /> */}
//       {/* <ChooseType /> */}
//       {/* <LoginScreen /> */}
//       {/* <HomeScreen /> */}
//       {/* <ConfirmScrren /> */}
//       {/* <Text>Private Teacher</Text>
//       {users?.map((item, index) => {
//         return <Text key={index}>{item}</Text>;
//       })} */}
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// export default App;

// ___________________________________________________________________________________
import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

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
  // useEffect(() => {
  //   dispatch(fetchDemo());
  // }, []);

  const users = useSelector((state) => state.demo.users);
  return (
    <SafeAreaView style={styles.container}>
      {/* <TeacherCourses /> */}
      {/* <PersonCard /> */}
      {/* <ChooseType /> */}
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      {/* <ConfirmScrren /> */}
      {/* <Text>Private Teacher</Text>
      {users?.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })} */}
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigation /> */}
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
