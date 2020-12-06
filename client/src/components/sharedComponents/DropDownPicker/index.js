import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const DropDownPicker = () => {
  const [selectedValue, setSelectedValue] = useState('Location');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Location" value="Location" />
        <Picker.Item label="Teacher" value="Teacher" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    marginLeft: 33,
    paddingLeft: 5,
  },
  picker: {
    height: 30,
    width: 140,
    color: '#FFF',
  },
});

export {DropDownPicker};
