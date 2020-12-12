import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import PersonCard from '../../../PersonCard';
import {Categories, DropDownPicker, SearchBar} from '../../../sharedComponents';
import {Design, Art, Math, Social} from '../../../svgComponents';
import Carousel from '../../../sharedComponents/Carousel';
import {useNavigation} from '@react-navigation/native';
const StudentHomeScreen = () => {
  const [isClickedCategories, setClickedCategories] = useState(false);
  const [filteredTeachersByCategory, setFilteredTeachersByCategory] = useState(
    [],
  );
  const navigation = useNavigation();
  const teachers = useSelector((state) => state.teachers.teachersList);
  const personCard = (teacher) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('option')}>
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
        </TouchableOpacity>
      </View>
    );
  };

  handleCategoryClick = (categoryName) => {
    let filteredCategories = teachers.filter((teacher) => {
      let subjects = teacher.subject.map((sub) => sub.toLowerCase());
      return subjects.includes(categoryName.toLowerCase());
    });
    setFilteredTeachersByCategory(filteredCategories);
    setClickedCategories(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <View style={styles.resContainer} />
          <View style={styles.searchContainer}>
            <Text style={styles.searchByText}>search by</Text>
            <DropDownPicker />
            <SearchBar searchList={teachers} />
            <View style={styles.categories}>
              <TouchableOpacity onPress={() => handleCategoryClick('Math')}>
                <Categories categoryName="Math">
                  <Math />
                </Categories>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCategoryClick('Social')}>
                <Categories categoryName="Social">
                  <Social />
                </Categories>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCategoryClick('Math')}>
                <Categories categoryName="Math">
                  <Math />
                </Categories>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleCategoryClick('Art')}>
                <Categories categoryName="Art">
                  <Art />
                </Categories>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleCategoryClick('Design')}>
                <Categories categoryName="Design">
                  <Design />
                </Categories>
              </TouchableOpacity>
            </View>

            {filteredTeachersByCategory.length > 0 ? (
              <Carousel cards={filteredTeachersByCategory} card={personCard} />
            ) : isClickedCategories ? (
              <Text>There is no teachers for this category</Text>
            ) : (
              <Carousel cards={teachers} card={personCard} />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
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
    alignSelf: 'center',
    top: 20,
    height: '92%',
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
