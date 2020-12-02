import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../components/screens/MainScreen/LoginScreen';
import ChooseType from '../components/screens/MainScreen/ChooseType';
import TeacherCourses from '../components/screens/AuthScreen/TeacherCourses';
import HomeScreen from '../components/screens/MainScreen/HomeScreen';
import ConfirmScrren from '../components/screens/AuthScreen/ConfirmScreen';
const Stack = createStackNavigator();
const StaNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChooseType"
      component={ChooseType}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="studentNavigation"
      component={AppNavigation}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="teacherNavigation"
      component={ConfirmScrren}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default StaNav;
