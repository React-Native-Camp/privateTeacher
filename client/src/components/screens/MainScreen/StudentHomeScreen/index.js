import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import PersonCard from '../../../PersonCard';
import {Categories, DropDownPicker, SearchBar} from '../../../sharedComponents';
import {Design, Art, Math, Social} from '../../../svgComponents';

const StudentHomeScreen = () => {
  const teacherProfile = useSelector((state) => state.user.teacherProfile);
  let {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
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
          <PersonCard
            imageProfile={teacherProfile?.avatar}
            name={teacherProfile?.name}
            displayChatIcon={true}
            displayRating={true}
            displayCoures={true}
            rating={teacherProfile?.rating}
            coures={teacherProfile?.subject}
            profileImageSizeStyle={{width: 320, height: 240, borderRadius: 12}}
            detailControlStyle={{
              position: 'absolute',
              top: 185,
              width: '100%',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  homeContainer: {
    position: 'relative',
    backgroundColor: '#28AE81',
    height: 400,
  },
  searchContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 20,
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
