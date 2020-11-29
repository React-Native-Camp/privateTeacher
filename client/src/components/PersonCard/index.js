import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ChatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import RatingStar from '../RatingStar';

const styles = StyleSheet.create({
  mainContainer: {},
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
  },
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
  displayRating,
}) => {
  const imageUrl = imageProfile ? (
    <Image
      style={{width: '100%', height: '100%'}}
      source={{uri: imageProfile}}
    />
  ) : (
    <Image
      style={{width: '100%'}}
      source={require('../../assets/default-avatar.jpg')}
    />
  );

  return (
    <TouchableOpacity>
      <View style={styles.mainContainer}>
        <View style={{height: 250}}>{imageUrl}</View>
        <View style={styles.detailControl}>
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
                <EditIcon name="edit" size={40} color="#28AE81" />
              ) : null}
            </View>
          </View>
          {displayCoures ? (
            <View style={styles.coursesContainer}>
              <View style={styles.courseCard}>
                <Text style={styles.courseText}>math</Text>
              </View>

              <View style={styles.courseCard}>
                <Text style={styles.courseText}>Science</Text>
              </View>

              <View style={styles.courseCard}>
                <Text style={styles.courseText}>Science</Text>
              </View>
            </View>
          ) : null}

          {displayRating ? (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Text>2</Text>
              <RatingStar value={2} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PersonCard;