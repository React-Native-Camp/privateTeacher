import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

const Carousel = (props) => {
  const {cards} = props;

  if (cards && cards.length) {
    return (
      <FlatList
        data={cards}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        scrollEnabled
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        removeClippedSubviews={true}
        windowSize={1}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return props.card(item);
        }}
        contentContainerStyle={styles.carouselItem}
      />
    );
  }
  return null;
};

const styles = StyleSheet.create({
  carouselItem: {
    height: 400,
  },
});

export default Carousel;
