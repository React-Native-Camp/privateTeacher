import React from 'react';
import {Image, View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text, Card, Rating, Badge, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
let info = {
  first: {img: 're', name: 'steall', rate: 4, subj: 'math'},
  second: {img: 're', name: 'ruba', rate: 1, subj: 'arabic'},
};

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.scroll}>
        <View style={styles.headerView}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <Button
            title="Log In"
            titleStyle={{fontSize: 24}}
            buttonStyle={{
              backgroundColor: '#28AE81',
              borderRadius: 20,
              width: 110,
              height: 50,
            }}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
        <Image
          style={styles.mainimg}
          source={require('../../../assets/home1.png')}
        />
        <Text style={styles.title}>
          Private Teacher App where you can find the right teacher for you
        </Text>

        <View style={styles.cardView}>
          <Card containerStyle={styles.cardStyle}>
            <Image
              style={styles.proimg}
              source={require('../../../assets/teacher.png')}
            />
            <Card.Title>{info.first.name} </Card.Title>
            <Rating
              imageSize={20}
              ratingCount={5}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              startingValue={info.first.rate}
              style={{}}
              type="star"
            />
            <Badge
              // status="primary"
              textProps={{}}
              // textStyle={{color: '#E3E3E3'}}
              value={info.first.subj}
            />
          </Card>
          <Card containerStyle={styles.cardStyle}>
            <Image
              style={styles.proimg}
              source={require('../../../assets/teacher.png')}
            />
            <Card.Title>{info.second.name}</Card.Title>
            <Rating
              imageSize={20}
              ratingCount={5}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              startingValue={info.second.rate}
              style={{}}
              type="star"
            />
            <View style={styles.badge}>
              <Badge
                // status="primary"
                textProps={{}}
                // textStyle={{color: '#E3E3E3'}}
                value={info.second.subj}
              />
              <Badge
                // status="primary"
                textProps={{}}
                // textStyle={{color: '#E3E3E3'}}
                value={info.second.subj}
              />
              <Badge
                // status="primary"
                textProps={{}}
                // textStyle={{color: '#E3E3E3'}}
                value={info.second.subj}
              />
              <Badge
                // status="primary"
                textProps={{}}
                // textStyle={{color: '#E3E3E3'}}
                value={info.second.subj}
              />
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    padding: 20,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    // padding: 20,
  },
  cardStyle: {
    height: 300,
    width: 180,
  },
  mainimg: {
    // justifyContent: 'center',
    paddingLeft: 140,
    paddingTop: 70,
  },
  scroll: {
    height: 800,
    width: 'auto',
    padding: 15,
  },
  badge: {
    margin: 2,
    paddingTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  proimg: {
    paddingTop: 0,
    width: 'auto',
    height: 150,
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
});
