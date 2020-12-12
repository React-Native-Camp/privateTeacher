import React, {useState} from 'react';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import {Button} from 'react-native-elements';
import {setUserType} from '../../../actions/userAction';
import RadioForm from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
var Types = [
  {label: 'Continue as a student', value: 'student', nav: 'studentNavigation'},
  {label: 'Continue as a teacher', value: 'teacher', nav: 'teacherNavigation'},
];

function ChooseType() {
  const navigation = useNavigation();
  const [selectedValue, setSelected] = useState();
  // const [selectedNav, setNav] = useState();
  const dispatch = useDispatch();
  const uservalue = useSelector((state) => state.user);
  // const userType = uservalue.StudentProfile.type;
  // function navigationOption(uservalue) {
  //   if (uservalue.StudentProfile.type === 'student')
  //     return navigation.navigate('studentNavigation');
  //   if (uservalue.StudentProfile.type === 'teacher')
  //     return navigation.navigate('teacherNavigation');
  // }
  //console.log('userValue', uservalue);
  // console.log('userValue', userType);
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
          onPress={(value) => setSelected(value)}
          buttonSize={30}
          buttonOuterSize={40}
          selectedButtonColor={'#F0AB2A'}
          selectedLabelColor={'#F0AB2A'}
          labelStyle={{fontSize: 20}}
          buttonColor={'#28AE81'}
        />
      </View>

      <View style={styles.Button}>
        <Button
          title="Confirm"
          color="#28AE81"
          titleStyle={{fontSize: 24}}
          buttonStyle={{
            backgroundColor: '#28AE81',
            borderRadius: 5,
            width: 150,
            height: 50,
          }}
          onPress={() => {
            // dispatch(setUserType(selectedValue));
            // navigationOption;
            console.log('selectedValue : ', selectedValue);
            if (uservalue.userProfile.type === 'student')
              navigation.navigate('studentNavigation');
            if (uservalue.userProfile.type === 'teacher')
              navigation.navigate('teacherNavigation');
            dispatch(setUserType(selectedValue));
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
