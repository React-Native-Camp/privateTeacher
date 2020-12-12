import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import feNav from './feNav';
// import {Entypo, Ionicons} from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCourses from '../components/screens/AuthScreen/TeacherCourses';
import HomeScreen from '../components/screens/MainScreen/HomeScreen';
import LoginScreen from '../components/screens/MainScreen/LoginScreen';
import ConfirmScrren from '../components/screens/AuthScreen/ConfirmScreen';
import StudentProfile from '../components/screens/AuthScreen/StudentProfile';
import StudentCourse from '../components/screens/AuthScreen/StudentCourse';
import StudentHomeScreen from '../components/screens/MainScreen/StudentHomeScreen';
// import StudentProfile from '../components/screens/AuthScreen/TeacherCourses';
const Tab = createBottomTabNavigator();
const AppNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      inactiveBackgroundColor: '#28AE81',
      activeBackgroundColor: 'white',
      activeTintColor: '#28AE81',
      inactiveTintColor: 'white',
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={StudentHomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="mycourse"
      component={StudentCourse}
      options={{
        tabBarLabel: 'my course',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="file-certificate-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="StudentProfile"
      component={StudentProfile}
      options={{
        tabBarLabel: 'profile',
        tabBarIcon: ({color, size}) => (
          <Ionicons
            name="person-circle-outline"
            color={color}
            size={size}
            activeColor="#F0AB2A"
          />
        ),
      }}
    />
    <Tab.Screen
      name="option"
      component={feNav}
      options={{
        // tabBarLabel: false,

        tabBarIcon: ({color, size}) => (
          <SimpleLineIcons
            name="options-vertical"
            color="white"
            size={size}
            backgroundColor={color.primary}
          />
        ),
        // backgroundColor=color.primary,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigation;
