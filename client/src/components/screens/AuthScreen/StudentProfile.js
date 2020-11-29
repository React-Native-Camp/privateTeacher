import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import PersonCard from '../../PersonCard';

export default function TeacherCourses() {
  return (
    <>
      <PersonCard displayEdit={true} name={'Ahmed Mostafa'} />
      <ScrollView style={styles.Inputs}>
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{type: 'MaterialCommunityIcons', name: 'phone'}}
          label="Phone"
          rightIconContainerStyle={{
            color: '#28AE81',
            backgroundColor: '#28AE81',
            width: 50,
          }}
        />
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
