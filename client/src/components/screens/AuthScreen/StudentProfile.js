import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import PersonCard from '../../PersonCard';
import {useDispatch, useSelector} from 'react-redux';
import {SaveStudentProfile} from '../../../actions/userAction';

export default function TeacherCourses() {
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
    dispatch(SaveStudentProfile(values));
  };

  const StudentData = useSelector((state) => state.user.StudentProfile);
  console.log('StudentData : ', StudentData);
  return (
    <>
      <PersonCard
        displayEdit={!isEdit}
        // displaySave={isEdit}
        enableEdit={enableEdit}
        name={StudentData?.name}
        // editHandle={editHandle}
      />
      <ScrollView style={styles.Inputs}>
        <Formik
          initialValues={StudentData}
          //   onSubmit={(values) => editHandle(values)}>
          onSubmit={(values) => editHandle(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              {isEdit ? (
                <Input
                  placeholder="Your Name"
                  leftIcon={{type: 'MaterialCommunityIcons', name: 'person'}}
                  label="Name"
                  disabled={disabledInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values?.name}
                />
              ) : null}

              <Input
                placeholder="Your Phone"
                leftIcon={{type: 'MaterialCommunityIcons', name: 'phone'}}
                label="Phone"
                disabled={disabledInput}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values?.phone}
              />

              <Input
                placeholder="Your Address"
                leftIcon={{type: 'FontAwesome5', name: 'home'}}
                label="Address"
                disabled={disabledInput}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values?.address}
              />

              <Input
                placeholder="Your Age"
                leftIcon={{name: 'date-range'}}
                label="Age"
                disabled={disabledInput}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values?.age}
              />
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
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Inputs: {
    margin: 16,
    marginLeft: 30,
    marginRight: 30,
  },
});
