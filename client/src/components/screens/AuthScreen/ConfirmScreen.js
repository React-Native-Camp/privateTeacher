import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GetCourseTime, BookCourse} from '../../../actions/courseAction';
import PersonCard from '../../PersonCard';
import RadioForm from 'react-native-simple-radio-button';

const ConfirmScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [timeSelected, setTimeSelected] = useState();
  const [couseId, setCouseId] = useState();
  const [teacherId, setTeacherId] = useState();

  const studentBookds = useSelector((state) => state.courses.studentBookds);
  console.log('studentBookds : ', studentBookds);
  useEffect(() => {
    setCouseId(route.params.couseId);
    setTeacherId(route.params.teacherId);
    dispatch(GetCourseTime(route.params.teacherId, route.params.couseId));
  }, []);

  const times = useSelector((state) => state.courses.selectedCoursesTime);

  // var times = [
  //   {label: 'Nov , 20 4:00 PM 1 houre  20$', value: 0},
  //   {label: 'Nov , 22 2:00 PM 1:30 houre  30$', value: 2},
  //   {label: 'Nov , 25 1:00 PM 2 houre  40$', value: 3},
  //   {label: 'Nov , 28 3:00 PM 3 houre  60$', value: 4},
  // ];

  const teacherProfile = useSelector((state) => state.user.teacherProfile);
  const userProfile = useSelector((state) => state.user.userProfile);

  return (
    <ScrollView>
      <View style={styles.main}>
        <PersonCard
          imageProfile={teacherProfile?.avatar}
          name={teacherProfile?.name}
          displayUserIcon={true}
          displayCoures={true}
          displayRating={true}
          rating={teacherProfile?.rating}
          coures={teacherProfile?.subject}
        />

        <View style={styles.container}>
          <RadioForm
            radio_props={times}
            initial={-1}
            onPress={(value) => {
              // alert(('value :', value));
              setTimeSelected(value);
            }}
            buttonSize={30}
            buttonOuterSize={40}
            selectedButtonColor={'#F0AB2A'}
            selectedLabelColor={'#F0AB2A'}
            labelStyle={{fontSize: 20, color: '#968E8E', marginTop: 8}}
            buttonColor={'#28AE81'}
            // onPress={() => {
            //   alert('Done');
            // }}
          />
        </View>

        <View style={styles.Button}>
          {timeSelected ? (
            <Button
              title="Confirm"
              titleStyle={{fontSize: 24, color: '#fff'}}
              buttonColor="#28AE81"
              buttonStyle={{backgroundColor: '#28AE81'}}
              onPress={() => {
                // console.log('teacherId : ', teacherId);
                // console.log('couseId : ', couseId);
                // console.log('userProfile.id : ', userProfile.id);
                // console.log('timeSelected : ', timeSelected);
                dispatch(
                  BookCourse(teacherId, couseId, userProfile.id, timeSelected),
                );
              }}
            />
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 40,
    marginLeft: 20,
  },
  image: {
    width: 300,
    height: 350,
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 20,
  },

  Button: {
    padding: 45,
    marginLeft: 80,
    width: 250,
    height: 200,
    margin: 50,
  },
});

export default ConfirmScreen;
