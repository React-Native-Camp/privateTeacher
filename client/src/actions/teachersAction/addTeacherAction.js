import {ADD_TEACHER, USER_ERROR} from '../types';

export const addTeacher = ({
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
    dispatch({
      type: ADD_TEACHER,
      payload: {phone, address, age, name, type, avatar, rating, subject},
    });
  } catch (err) {
    // dispatch({type: USER_ERROR, payload: err});
  }
};
