import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Text} from 'react-native-elements';
import PersonCard from '../../PersonCard';

let teacherInfo = {
  edu: 'bachelor computer',
  experience: 'ppu teaching',
  location: 'hebron',
  phone: '9725478882',
};
export default function TeacherCourses() {
  return (
    <ScrollView style={styles.container}>
      <PersonCard />

      <View style={styles.card}>
        <View style={styles.yellowView}>
          <Icon type="MaterialCommunityIcons" name="hops" color="white" />
        </View>
        <View style={styles.whiteSpace}>
          <Text>{teacherInfo.edu}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.yellowView}>
          <Icon type="FontAwesome" name="car" color="white" />
        </View>
        <View style={styles.whiteSpace}>
          <Text>{teacherInfo.experience}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.yellowView}>
          <Icon type="Entypo" name="location-pin" color="white" />
        </View>
        <View style={styles.whiteSpace}>
          <Text>{teacherInfo.location}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.yellowView}>
          <Icon type="FontAwesome" name="phone" color="white" />
        </View>
        <View style={styles.whiteSpace}>
          <Text>{teacherInfo.phone}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  yellowView: {
    backgroundColor: '#F0AB2A',
    width: 105,
    height: 65,
    // textAlign: 'center',
    // flex: 1,
    // flexDirection: 'column',
    // alignContent: 'center',
    justifyContent: 'center',
  },
  whiteSpace: {
    backgroundColor: 'white',
    height: 65,
    width: 400,
    justifyContent: 'center',
    paddingLeft: 23,
  },
  container: {backgroundColor: '#F2F2F2'},
  nameView: {justifyContent: 'space-between', flexDirection: 'row'},
  card: {flexDirection: 'row', marginTop: 15},
});
