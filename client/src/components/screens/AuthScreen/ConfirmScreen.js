import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import PersonCard from '../../PersonCard';
import RadioForm from 'react-native-simple-radio-button';

var times = [
  {label: 'Nov , 20 4:00 PM 1 houre  20$', value: 0},
  {label: 'Nov , 22 2:00 PM 1:30 houre  30$', value: 2},
  {label: 'Nov , 25 1:00 PM 2 houre  40$', value: 3},
  {label: 'Nov , 28 3:00 PM 3 houre  60$', value: 4},
];

const ConfirmScreen = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <PersonCard />

        <View style={styles.container}>
          <RadioForm
            radio_props={times}
            initial={-1}
            onPress={(value) => {
              alert(value);
            }}
            buttonSize={30}
            buttonOuterSize={40}
            selectedButtonColor={'#F0AB2A'}
            selectedLabelColor={'#F0AB2A'}
            labelStyle={{fontSize: 20, color: '#968E8E', marginTop: 8}}
            buttonColor={'#28AE81'}
          />
        </View>

        <View style={styles.Button}>
          <Button
            title="Confirm"
            titleStyle={{fontSize: 24, color: '#fff'}}
            buttonColor="#28AE81"
            buttonStyle={{backgroundColor: '#28AE81'}}
          />
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
