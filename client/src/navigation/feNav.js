import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../components/screens/MainScreen/LoginScreen';
import ChooseType from '../components/screens/MainScreen/ChooseType';
import TeacherCourses from '../components/screens/AuthScreen/TeacherCourses';
import HomeScreen from '../components/screens/MainScreen/HomeScreen';
import ConfirmScrren from '../components/screens/AuthScreen/ConfirmScreen';
const Stack = createStackNavigator();
const feNav = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="TeacherCourses"
      component={TeacherCourses}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ConfirmScrren"
      component={ConfirmScrren}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default feNav;
