import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  // const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        // onChangeText={(search) => setSearchValue(search)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#FFF',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 5,
    width: '84%',
    height: 45,
  },
  searchBar: {},
});

export {SearchBar};
