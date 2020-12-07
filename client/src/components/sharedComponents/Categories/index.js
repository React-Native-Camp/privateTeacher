import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Categories = (props) => {
  console.log(props.children);
  return (
    <View style={styles.container}>
      <View style={styles.categoryIconContainer}>
        <View style={styles.categoryIcon}>{props.children}</View>
      </View>
      <Text style={styles.categoryName}>{props.categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 9,
    alignItems: 'center',
  },
  categoryIconContainer: {
    width: 55,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: '#F0AB2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    textAlignVertical: 'center',
  },
  categoryName: {
    color: '#FFF',
  },
});
export {Categories};
