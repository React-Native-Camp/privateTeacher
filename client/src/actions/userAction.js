import {
  USER_SAVE_PROFILE,
  USER_ERROR,
  USER_SET_TYPE,
  USER_SET_TYPE_ERROR,
} from './types';

// this demoe just for test
export const SaveStudentProfile = ({phone, address, age, name}) => (
  dispatch,
) => {
  try {
    // send data to server to update in db
    dispatch({
      type: USER_SAVE_PROFILE,
      payload: {phone, address, age, name},
    });
  } catch (err) {
    dispatch({type: USER_ERROR, payload: err});
  }
};

export const setUserType = (newType) => (dispatch) => {
  try {
    console.log('newType : ', newType);
    dispatch({
      type: USER_SET_TYPE,
      payload: newType,
    });
  } catch (err) {
    dispatch({type: USER_SET_TYPE_ERROR, payload: err});
  }
};
