import React, {Component} from 'react';
import {Text, Button} from 'react-native';

function Home(props) {
  // static navigationOptions = {
  //   title: 'Home page',
  // };

  const {navigate} = props.navigation;

  return (
    <>
      <Text>in home page</Text>
      <Button title="To Teacher" onPress={() => navigate('Teacher')}>
        to teacher profile page
      </Button>
    </>
  );
}

export default Home;
