import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import feNav from './feNav';

import TeacherCourses from '../components/screens/AuthScreen/TeacherCourses';
import HomeScreen from '../components/screens/MainScreen/HomeScreen';
import ConfirmScrren from '../components/screens/AuthScreen/ConfirmScreen';
const Tab = createBottomTabNavigator();
const AppNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="TeacherCourses" component={feNav} />
  </Tab.Navigator>
);

export default AppNavigation;
