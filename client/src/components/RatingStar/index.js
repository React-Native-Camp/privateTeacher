import React from 'react';

import {Rating} from 'react-native-elements';
export default function RatingStar({value}) {
  return (
    <Rating
      imageSize={20}
      ratingCount={5}
      reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
      startingValue={value}
      style={{}}
      type="star"
    />
  );
}
