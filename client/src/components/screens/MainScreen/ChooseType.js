import React, {useState} from 'react';
import {StyleSheet, View, Image, Button, ToastAndroid} from 'react-native';
import {setUserType} from '../../../actions/studenAction';
import RadioForm from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
var Types = [
  {label: 'continue as a sttudent', value: 'student', nav: 'studentNavigation'},
  {label: 'continue as a teacher', value: 'teacher', nav: 'teacherNavigation'},
];

function ChooseType() {
  const navigation = useNavigation();
  const [selectedValue, setSelected] = useState();
  const [selectedNav, setNav] = useState();
  const dispatch = useDispatch();
  const uservalue = useSelector((state) => state.student);
  const userType = uservalue.StudentProfile.type;
  const navigationOption = (userType) => {
    if (userType === 'student') setNav('studentNavigation');
    if (userType === 'teacher') setNav('teacherNavigation');
  };
  console.log('userValue', uservalue);
  console.log('userValue', userType);
  return (
    <View style={styles.main}>
      {/* <View> */}
      <Image
        style={styles.image}
        source={require('../../../assets/logo.png')}
      />
      {/* </View> */}
      <View style={styles.container}>
        <RadioForm
          radio_props={Types}
          initial={-1}
          onPress={(value) => {
            {
              setSelected(value);
            }
          }}
          buttonSize={30}
          buttonOuterSize={40}
          selectedButtonColor={'#F0AB2A'}
          selectedLabelColor={'#F0AB2A'}
          labelStyle={{fontSize: 22}}
          buttonColor={'#28AE81'}
        />
      </View>

      <View style={styles.Button}>
        <Button
          title="Confirm"
          color="#28AE81"
          onPress={() => {
            dispatch(setUserType(selectedValue));
            console.log('words', userType);
            if (userType === 'student')
              navigation.navigate('studentNavigation');
            if (userType === 'teacher')
              navigation.navigate('teacherNavigation');
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    flexDirection: 'column',
    height: '100%',
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 40,
    marginLeft: 20,
  },
  image: {
    // width: 300,
    // height: 350,
    // alignItems: 'center',
    // marginLeft: 50,
    // marginTop: 20,
  },

  Button: {
    padding: 45,
    marginLeft: 80,
    width: 250,
    height: 200,
    margin: 50,
  },
});

export default ChooseType;
