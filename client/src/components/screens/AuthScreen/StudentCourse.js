import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

import PersonCard from '../../PersonCard';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar, Accessory} from 'react-native-elements';
export default function StudentCourse() {
  const dispatch = useDispatch();

  const StudentData = useSelector((state) => state.user.userProfile);
  const studentBookds = useSelector((state) => state.courses.studentBookds);
  const courses = useSelector((state) => state.courses.teacherCourses);
  const coursesTime = useSelector((state) => state.courses.coursesTime);
  const teacherProfile = useSelector((state) => state.user.teacherProfile);

  // console.log('studentBookds : ', studentBookds);
  // console.log('courses : ', courses);
  // console.log('teacherProfile : ', teacherProfile);
  console.log('coursesTime : ', coursesTime);

  return (
    <ScrollView>
      <PersonCard name={StudentData?.name} imageProfile={StudentData?.avatar} />
      <View style={styles.corses}>
        {studentBookds?.map((item, index) => {
          console.log('studentBookds item', item);
          const course = courses?.filter((x) => x.id === item.courseId);
          console.log('course : ', course);

          const time = coursesTime
            ? coursesTime[0].filter((x) => x.id === item.timeId)
            : null;

          // console.log('Select time : ', time);
          return (
            <View key={index} style={styles.container}>
              <View style={styles.cardView}>
                <View>
                  <Text style={{fontSize: 24}}>
                    {course ? course[0].name : null}
                  </Text>
                  <Text style={{color: 'gray', fontSize: 18}}>
                    {teacherProfile?.name}
                  </Text>
                </View>
                <View style={styles.courseDetails}>
                  <Text style={{marginRight: 20, color: 'gray', fontSize: 18}}>
                    {time ? time[0].label : null}
                  </Text>
                </View>
              </View>

              <View style={styles.book}>
                <Avatar
                  rounded
                  size="large"
                  source={{
                    uri:
                      'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
                  }}></Avatar>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  corses: {
    margin: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 130,
    marginTop: 20,

    alignItems: 'center',

    padding: 10,
    // paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 12,
  },
  cardView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 26,
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    justifyContent: 'flex-start',
    marginTop: 9,
  },
});
