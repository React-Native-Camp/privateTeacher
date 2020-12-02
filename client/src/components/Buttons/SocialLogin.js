import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const SocialLogin = ({onPress, title, iconName, borderColor, iconColor}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 36,
    },
    iconContainer: {
      borderWidth: 4,
      borderRightWidth: 0,
      borderColor: borderColor,

      borderBottomLeftRadius: 6,

      borderTopLeftRadius: 6,
      height: 60,
      width: 70,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    textContainer: {
      borderWidth: 4,
      borderColor: borderColor,

      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      height: 60,
      width: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
      lineHeight: 23,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#000000',
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={40} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SocialLogin;
