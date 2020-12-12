import {
  USER_SAVE_PROFILE,
  Teacher_SAVE_PROFILE,
  USER_ERROR,
  USER_SET_TYPE,
  USER_SET_TYPE_ERROR,
} from './types';

// this demoe just for test
export const SaveUserProfile = ({phone, address, age, name, type}) => (
  dispatch,
) => {
  try {
    // send data to server to update in db
    dispatch({
      type: USER_SAVE_PROFILE,
      payload: {phone, address, age, name, type},
    });
  } catch (err) {
    dispatch({type: USER_ERROR, payload: err});
  }
};

export const SaveTeacherProfile = ({
  phone,
  address,
  age,
  name,
  type,
  avatar,
  rating,
  subject,
}) => (dispatch) => {
  try {
    // send data to server to update in db
    dispatch({
      type: Teacher_SAVE_PROFILE,
      payload: {phone, address, age, name, type, avatar, rating, subject},
    });
  } catch (err) {
    dispatch({type: USER_ERROR, payload: err});
  }
};

export const setUserType = (newType) => (dispatch) => {
  try {
    dispatch({
      type: USER_SET_TYPE,
      payload: newType,
    });
  } catch (err) {
    dispatch({type: USER_SET_TYPE_ERROR, payload: err});
  }
};
