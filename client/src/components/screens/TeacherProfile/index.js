import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';

import PersonCard from '../../PersonCard';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import {Teacher_SAVE_PROFILE} from '../../../actions/userAction';
let teacherInfo = {
  edu: 'bachelor computer',
  experience: 'ppu teaching',
  location: 'hebron',
  phone: '9725478882',
};
export default function TeacherProfileEdit() {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);
  const enableEdit = () => {
    setIsEdit(!isEdit);
    setDisabledInput(!disabledInput);
  };

  const editHandle = (values) => {
    setIsEdit(false);
    setDisabledInput(true);
    // alert('editHandle');
    console.log('values : ', values);
    dispatch(Teacher_SAVE_PROFILE(values));
  };
  const TeacherData = useSelector((state) => state.user.teacherProfile);
  console.log('TeacherData : ', TeacherData);
  // const buildTeacherSubject=(teacherSubject)=>{
  //   return teacherCourses?.map((item) => {
  //     return (

  //      )
  //   });
  // };

  return (
    <ScrollView style={styles.container}>
      <PersonCard
        displayEdit={!isEdit}
        enableEdit={enableEdit}
        name={TeacherData?.name}
        imageProfile={TeacherData?.avatar}
      />
      <Formik
        initialValues={TeacherData}
        //   onSubmit={(values) => editHandle(values)}>
        onSubmit={(values) => editHandle(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={styles.card}>
              <View style={styles.yellowView}>
                <Icon type="Octicons" name="person" color="white" />
              </View>
              <View style={styles.whiteSpace}>
                <Input
                  disabled={disabledInput}
                  onChangeText={handleChange('subject')}
                  value={values?.subject.toString()}
                />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.yellowView}>
                <Icon type="Octicons" name="person" color="white" />
              </View>
              <View style={styles.whiteSpace}>
                <Input
                  placeholder="Your certificate"
                  disabled={disabledInput}
                  onChangeText={handleChange('certificate')}
                  value={values?.certificate}
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.yellowView}>
                <Icon type="Octicons" name="person" color="white" />
              </View>
              <View style={styles.whiteSpace}>
                <Input
                  placeholder="Your experince"
                  disabled={disabledInput}
                  onChangeText={handleChange('experience')}
                  value={values?.experience}
                />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.yellowView}>
                <Icon type="Entypo" name="location-pin" color="white" />
              </View>
              <View style={styles.whiteSpace}>
                <Input
                  disabled={disabledInput}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values?.address}
                />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.yellowView}>
                <Icon type="FontAwesome" name="phone" color="white" />
              </View>
              <View style={styles.whiteSpace}>
                <Input
                  placeholder="Your Phone"
                  disabled={disabledInput}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values?.phone}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              {isEdit ? (
                <Button
                  onPress={handleSubmit}
                  title="Submit"
                  buttonStyle={{
                    backgroundColor: '#28AE81',
                    width: 160,
                    height: 45,
                  }}
                  titleStyle={{
                    fontSize: 24,
                    fontWeight: '400',
                  }}
                />
              ) : null}
            </View>
          </>
        )}
      </Formik>
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
