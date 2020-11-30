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
const Tab = createBottomTabNavigator();
const AppNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="course"
      component={LoginScreen}
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
      name="TeacherCourses"
      component={feNav}
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
      component={ConfirmScrren}
      options={{
        // tabBarLabel: false,

        tabBarIcon: ({color, size}) => (
          <SimpleLineIcons
            name="options-vertical"
            color={color}
            // color="rgb(255, 255, 255)"
            // color="rgb(40, 174, 129)"
            size={size}
            backgroundColor={color.primary}
            // background="rgb(255, 255, 255)"
          />
        ),
        // backgroundColor=color.primary,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigation;
