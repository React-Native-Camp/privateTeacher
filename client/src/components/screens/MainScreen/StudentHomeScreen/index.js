import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import PersonCard from '../../../PersonCard';
import {Categories, DropDownPicker, SearchBar} from '../../../sharedComponents';
import {Design, Art, Math, Social} from '../../../svgComponents';
import Carousel from '../../../sharedComponents/Carousel';

const StudentHomeScreen = () => {
  const teachers = useSelector((state) => state.teachers.teachersList);
  const personCard = (teacher) => {
    console.log(teacher);
    return (
      <View>
        <PersonCard
          imageProfile={teacher?.avatar}
          name={teacher?.name}
          displayChatIcon={true}
          displayRating={true}
          displayCoures={true}
          rating={teacher?.rating}
          coures={teacher?.subject}
          profileImageSizeStyle={{
            width: '90%',
            height: 240,
            borderRadius: 12,
          }}
          detailControlStyle={{
            position: 'absolute',
            top: 185,
            width: '80%',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View style={styles.resContainer} />
        <View style={styles.searchContainer}>
          <Text style={styles.searchByText}>search by</Text>
          <DropDownPicker />
          <SearchBar />
          <View style={styles.categories}>
            <Categories categoryName="Math">
              <Math />
            </Categories>
            <Categories categoryName="Social" categoryIconName="math-compass">
              <Social />
            </Categories>
            <Categories categoryName="Math" categoryIconName="math-compass">
              <Math />
            </Categories>
            <Categories categoryName="Art" categoryIconName="math-compass">
              <Art />
            </Categories>
            <Categories categoryName="Design" categoryIconName="math-compass">
              <Design />
            </Categories>
          </View>
          <Carousel cards={teachers} card={personCard} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  homeContainer: {
    position: 'relative',
    height: Dimensions.get('window').height,
  },
  resContainer: {
    backgroundColor: '#28AE81',
    height: 400,
  },
  searchContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 20,
    height: '83%',
  },
  searchByText: {
    marginLeft: 30,
    paddingLeft: 5,
    marginTop: 15,
    marginBottom: 0,
    alignSelf: 'flex-start',
    color: '#FFF',
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 40,
  },
});

export default StudentHomeScreen;
