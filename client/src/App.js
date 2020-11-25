import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginScreen from './components/screens/MainScreen/LoginScreen';
import ChooseType from './components/screens/MainScreen/ChooseType';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemo} from './actions/demoAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDemo());
  // }, []);

  const users = useSelector((state) => state.demo.users);
  return (
    <View style={styles.container}>
      <ChooseType />
      <LoginScreen />
      {/* <Text>Private Teacher</Text>
      {users?.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })} */}
    </View>
  );
};

export default App;
