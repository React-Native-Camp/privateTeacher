import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ChatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import RatingStar from '../RatingStar';

const profileImageStyles = (profileImageSizeStyle) => {
  const {height, width, borderRadius} = profileImageSizeStyle;
  return StyleSheet.create({
    profileImageContainer: {
      height: height ? height : 250,
      width: Dimensions.get('window').width,
      alignItems: 'center',
    },
    profileImage: {
      width: width ? width : '100%',
      height: height ? height : 350,
      borderRadius: borderRadius ? borderRadius : 0,
    },
  });
};

const detailControlStyles = (detailControlStyle) => {
  const {position, top, width} = detailControlStyle;
  return StyleSheet.create({
    detailControl: {
      backgroundColor: '#FFFBFB',
      // height: 140,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 1,
      borderColor: '#E1D6D6',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      position: position ? position : 'relative',
      alignSelf: 'center',
      top: top ? top : 0,
      width: width ? width : '100%',
    },
  });
};

const styles = StyleSheet.create({
  mainContainer: {},
  personName: {
    fontSize: 24,
  },
  coursesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 12,
  },
  courseCard: {
    marginTop: 6,
    marginBottom: 6,
    marginRight: 12,
    backgroundColor: '#E3E3E3',
    borderRadius: 12,
    height: 35,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseText: {
    fontSize: 18,
  },
});

const PersonCard = ({
  imageProfile,
  name,
  displayEdit,
  displayUserIcon,
  displayChatIcon,
  displayCoures,
  coures,
  displayRating,
  rating,
  enableEdit,
  displaySave,
  editHandle,
  profileImageSizeStyle,
  detailControlStyle,
}) => {
  const imageUrl = imageProfile ? (
    <Image
      style={profileImageStyles(profileImageSizeStyle).profileImage}
      source={{uri: imageProfile}}
    />
  ) : (
    <Image
      style={{width: '100%', height: 280}}
      source={require('../../assets/default-avatar.jpg')}
    />
  );

  return (
    <TouchableOpacity>
      <View style={styles.mainContainer}>
        <View
          style={
            profileImageStyles(
              profileImageSizeStyle ? profileImageSizeStyle : '',
            ).profileImageContainer
          }>
          {imageUrl}
        </View>
        <View style={detailControlStyles(detailControlStyle).detailControl}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.personName}>{name}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {displayUserIcon ? (
                <UserIcon
                  name="user-o"
                  size={40}
                  color="#F0AB2A"
                  style={{marginRight: 16}}
                />
              ) : null}

              {displayChatIcon ? (
                <ChatIcon
                  name="chat-processing-outline"
                  size={40}
                  color="#F0AB2A"
                />
              ) : null}

              {displayEdit ? (
                <EditIcon
                  name="edit"
                  size={40}
                  color="#28AE81"
                  onPress={enableEdit}
                />
              ) : null}
              {displaySave ? (
                <EditIcon
                  name="save"
                  size={40}
                  color="#28AE81"
                  onPress={editHandle}
                />
              ) : null}
            </View>
          </View>
          {displayCoures ? (
            <View style={styles.coursesContainer}>
              {coures?.map((item, index) => (
                <View key={index} style={styles.courseCard}>
                  <Text style={styles.courseText}>{item}</Text>
                </View>
              ))}
            </View>
          ) : null}

          {displayRating ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 8,
              }}>
              <Text style={{fontSize: 20, marginRight: 16, marginLeft: 16}}>
                {rating}
              </Text>
              <RatingStar value={rating} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PersonCard;
