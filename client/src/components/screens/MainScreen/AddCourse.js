import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Addcourse() {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.teacher}>
        <Image
          style={styles.image}
          source={require('../../../assets/teacher.png')}
          style={styles.img}
        />
        <Text style={styles.text}>Stella Russell</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput style={styles.inputText} placeholder="course name.." />
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.inputText} placeholder="Descreption.." />
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.inputText} placeholder="Price.." />
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.inputText} placeholder="level.." />
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.inputText} placeholder="schedule.." />
        </View>
      </View>
      <View style={styles.allButton}>
        <View style={styles.Button}>
          <Button title="submit" color="#28AE81" onPress={() => {}} />
        </View>
        <View style={styles.Button}>
          <Button title="cancle" color="#BD0022" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 55,
  },
  inputs: {
    backgroundColor: '#EBEBEB',
    marginLeft: 25,
    width: 350,
    borderRadius: 11,
    marginTop: 30,
  },
  teacher: {
    flexDirection: 'row',
    margin: 7,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 25,
    margin: 17,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  Button: {
    width: 200,
    height: 200,
    padding: 20,
  },

  allButton: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 50,
  },
  inputText: {
    marginLeft: 4,
    fontSize: 17,
  },
});
export default Addcourse;
