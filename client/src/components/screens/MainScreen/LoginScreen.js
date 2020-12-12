import React from 'react';
import {Text, View, StyleSheet, Image, Alert, ScrollView} from 'react-native';
import SocialLogin from '../../Buttons/SocialLogin';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthChange} from '../../../actions/authAction';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 107,
    flexDirection: 'column',
    height: '100%',
  },
  Logo: {
    // width: 200, height: 200
  },
  title: {
    width: 328,
    height: 90,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
  loginContainer: {
    marginTop: 40,
  },
});

const createTwoButtonAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('../../../assets/logo.png')} />
      <Text style={styles.title}>
        Private Teacher App where you can find the right teacher for you
      </Text>
      <View style={styles.loginContainer}>
        <SocialLogin
          iconName={'google'}
          onPress={() => {
            dispatch(AuthChange(true)), navigation.navigate('ChooseType');
          }}
          title={'Login with Google'}
          borderColor={'#28AE81'}
          iconColor={'#34A853'}
        />
        <SocialLogin
          iconName={'facebook'}
          onPress={() => {
            dispatch(AuthChange(true)), navigation.navigate('ChooseType');
          }}
          title={'Login with Facebook'}
          borderColor={'#395185'}
          iconColor={'#395185'}
        />
      </View>
    </View>
  );
};

// '../../assets/Logo.svg'
export default LoginScreen;
