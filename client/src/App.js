import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemo} from './actions/demoAction';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDemo());
  }, []);

  const users = useSelector((state) => state.demo.users);
  return (
    <>
      <Text>Private Teacher</Text>
      {users?.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
    </>
  );
};

export default App;
