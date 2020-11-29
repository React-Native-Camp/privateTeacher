import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import PersonCard from '../../PersonCard';

export default function TeacherCourses() {
  const [isEdit, setIsEdit] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);
  const enableEdit = () => {
    setIsEdit(!isEdit);
    setDisabledInput(!disabledInput);
  };

  const editHandle = () => {
    setIsEdit(!isEdit);
    setDisabledInput(!disabledInput);
    alert('editHandle');
  };

  return (
    <>
      <PersonCard
        displayEdit={!isEdit}
        displaySave={isEdit}
        enableEdit={enableEdit}
        name={'Ahmed Mostafa'}
        editHandle={editHandle}
      />
      <ScrollView style={styles.Inputs}>
        <Input
          placeholder="Your Phone"
          leftIcon={{type: 'MaterialCommunityIcons', name: 'phone'}}
          label="Phone"
          disabled={disabledInput}
        />

        <Input
          placeholder="Your Address"
          leftIcon={{type: 'FontAwesome5', name: 'home'}}
          label="Address"
          disabled={disabledInput}
        />

        <Input
          placeholder="Your Age"
          leftIcon={{name: 'date-range'}}
          label="Age"
          disabled={disabledInput}
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
