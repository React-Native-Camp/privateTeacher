import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const SearchBar = (props) => {
  const {searchList} = props;

  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState();

  const filterList = (searchText) => {
    setSearchValue(searchText);
    const newFilteredList = searchList.filter((listItem) => {
      return listItem.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredList(newFilteredList);
  };

  let searchListContainer;
  if (searchValue) {
    searchListContainer = (
      <FlatList
        data={filteredList}
        renderItem={({item}) => (
          <ListItem>
            <Avatar rounded source={{uri: item.avatar}} size="medium" />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>
                {item.subject.map((subject) => (
                  <View>
                    <Text>
                      {subject} {'\xa0'}
                    </Text>
                  </View>
                ))}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.renderSeparator} />}
        dd
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search"
          onChangeText={(search) => filterList(search)}
          style={styles.searchBar}
        />
      </View>
      <View>{searchListContainer}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '84%',
    height: 70,
    zIndex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#FFF',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    height: 45,
  },
  renderSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
});

export {SearchBar};
