import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import PersonCard from '../../PersonCard';
// import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SaveUserProfile} from '../../../actions/userAction';
import {DeleteCourse} from '../../../actions/courseAction';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

let info = {img: 're', name: 'steall', rate: 3, subj: 'math'};
let courseInfo = {
  firstCourse: {name: 'course name', durtion: '1 hour', price: '30$'},
  secondCourse: {name: 'course name', durtion: '3 hour', price: '50$'},
  thirdCourse: {name: 'course name', durtion: '3 hour', price: '50$'},
};
const buildCourse = (teacherCourses, currentUserType, dispatch, navigation) => {
  return teacherCourses?.map((item) => {
    return (
      <View key={item.id} style={styles.container}>
        <View style={styles.cardView}>
          <View>
            <Text style={{fontSize: 24}}>{item.name}</Text>
          </View>
          <View style={styles.courseDetails}>
            <Text style={{marginRight: 20, color: 'gray', fontSize: 18}}>
              {item.durtion}
            </Text>
            <Text style={{color: 'gray', fontSize: 18}}>{item.price}</Text>
          </View>
        </View>

        <View style={styles.book}>
          {currentUserType === 'teacher' ? (
            <TouchableOpacity
              onPress={() => {
                if (dispatch) {
                  dispatch(DeleteCourse(item.teacherId, item.id));
                }
              }}>
              <Text h4 style={{color: 'red', fontSize: 24}}>
                Delete
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ConfirmScrren', {
                  couseId: item.id,
                  teacherId: item.teacherId,
                })
              }>
              <Text style={{color: 'green', fontSize: 24}}>Book</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  });
};

export default function TeacherCourses() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const teacherProfile = useSelector((state) => state.user.teacherProfile);
  const currentType = useSelector((state) => state.user.currentUserType);
  const teacherCourses = useSelector((state) => state.courses.teacherCourses);

  const [currentUserType, setCurrentUserType] = useState(currentType);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          marginBottom: 46,
        }}>
        {currentUserType === 'teacher' ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 24,
            }}>
            <View>
              <Avatar
                rounded
                size="large"
                source={{
                  uri: teacherProfile?.avatar,
                }}></Avatar>
            </View>
            <View>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                {teacherProfile?.name}
              </Text>
            </View>
          </View>
        ) : (
          <PersonCard
            imageProfile={teacherProfile?.avatar}
            name={teacherProfile?.name}
            displayUserIcon={true}
            displayCoures={true}
            displayRating={true}
            rating={teacherProfile?.rating}
            coures={teacherProfile?.subject}
          />
        )}

        {buildCourse(teacherCourses, currentUserType, dispatch, navigation)}
      </View>
    </ScrollView>
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
    width: 95,
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
