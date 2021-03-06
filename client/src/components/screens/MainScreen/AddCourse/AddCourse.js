import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MultiSelectView from 'react-native-multiselect-view';

import Schedule from './Schedule';

var levels = ['level1', 'level2', 'level3'];

function Addcourse() {
  const [state, setState] = useState({
    course_name: '',
    descreption: '',
    price: '',
  });

  const handlechange = event => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.teacher}>
        <Image
          style={styles.image}
          source={require('../../../../assets/teacher.png')}
          style={styles.img}
        />
        <Text style={styles.text}>Stella Russell</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            name="course_name"
            placeholder="course name.."
            value={state.course_name}
            onChange={handlechange}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            name="descreption"
            placeholder="Descreption.."
            value={state.descreption}
            onChange={handlechange}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            name="price"
            placeholder="Price.."
            value={state.price}
            onChange={handlechange}
          />
        </View>
        <View style={styles.border}>
          <Text style={styles.grade}>Grades:</Text>
          <View style={styles.box}>
            <MultiSelectView
              data={levels}
              activeContainerStyle={styles.activeCom}
              inactiveContainerStyle={styles.inactiveCom}
            />
          </View>
        </View>
        <View style={styles.inputs}>
          <Schedule />
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
    marginTop: 40,
  },
  teacher: {
    flexDirection: 'row',
    margin: 7,
    marginLeft: 20,
    alignItems: 'flex-start',
    marginBottom: -15,
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
    width: 160,
    height: 200,
    padding: 20,
  },

  allButton: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 50,
  },
  inputText: {
    marginLeft: 4,
    fontSize: 17,
  },

  activeCom: {
    backgroundColor: '#F0AB2A',
    borderRadius: 6,
  },

  box: {
    marginTop: -17,
    height: 50,
    marginLeft: -20,
  },
  border: {
    height: 50,
    backgroundColor: '#EBEBEB',
    marginLeft: 25,
    width: 350,
    borderRadius: 11,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
  },
  grade: {fontSize: 17, margin: 10, color: 'gray'},
  inactiveCom: {
    borderRadius: 6,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
});

export default Addcourse;
