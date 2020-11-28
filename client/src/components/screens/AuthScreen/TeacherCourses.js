import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import PersonCard from '../../PersonCard';
import {useNavigation} from '@react-navigation/native';

let info = {img: 're', name: 'steall', rate: 3, subj: 'math'};
let courseInfo = {
  firstCourse: {name: 'course name', durtion: '1 hour', price: '30$'},
  secondCourse: {name: 'course name', durtion: '3 hour', price: '50$'},
  thirdCourse: {name: 'course name', durtion: '3 hour', price: '50$'},
};
const buildCourse = () => {
  const navigation = useNavigation();
  return Object.keys(courseInfo).map((key, index) => {
    return (
      <View key={index} style={styles.container}>
        <View style={styles.cardView}>
          <View>
            <Text style={{fontSize: 24}}>{courseInfo[key].name}</Text>
          </View>
          <View style={styles.courseDetails}>
            <Text style={{marginRight: 20, color: 'gray', fontSize: 18}}>
              {courseInfo[key].durtion}
            </Text>
            <Text style={{color: 'gray', fontSize: 18}}>
              {courseInfo[key].price}
            </Text>
          </View>
        </View>

        <View style={styles.book}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ConfirmScrren')}>
            <Text h6 style={{color: 'green'}}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};
export default function TeacherCourses() {
  return (
    <>
      <PersonCard />
      <ScrollView>{buildCourse()}</ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  teacherImg: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  nameView: {justifyContent: 'space-between', flexDirection: 'row'},
  rateView: {flexDirection: 'row'},
  cardView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 26,
  },
  book: {
    borderLeftWidth: 1,
    borderColor: 'gray',
    // backgroundColor: 'blue',
    height: 95,
    justifyContent: 'center',
    width: 80,
    alignItems: 'center',
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    justifyContent: 'flex-start',
    marginTop: 9,
  },
  mainImg: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 95,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',

    paddingLeft: 10,
    // paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
