import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddCourse from '../components/screens/MainScreen/AddCourse';
import TeacherCourses from '../components/screens/AuthScreen/TeacherCourses';
const Tab = createBottomTabNavigator();
const teacherNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      inactiveBackgroundColor: '#28AE81',
      activeBackgroundColor: 'white',
      activeTintColor: '#28AE81',
      inactiveTintColor: 'white',
    }}>
    {/* <Tab.Screen
      name="HomeScreen"
      component={feNav}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="course"
      component={TeacherCourses}
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
      name="New course"
      component={AddCourse}
      options={{
        tabBarLabel: 'new course',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="pluscircleo" color={color} size={size} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="TeacherProfile"
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
      component={LoginScreen}
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
    /> */}
  </Tab.Navigator>
);

export default teacherNavigation;
