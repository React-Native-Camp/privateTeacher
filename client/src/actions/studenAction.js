import {STUDENT_SAVE_PROFILE, STUDENT_ERROR} from './types';

// this demoe just for test
export const SaveStudentProfile = ({phone, address, age, name}) => (
  dispatch,
) => {
  try {
    // send data to server to update in db
    console.log('Action Student Data  :', {phone, address, age, name});
    dispatch({
      type: STUDENT_SAVE_PROFILE,
      payload: {phone, address, age, name},
    });
  } catch (err) {
    dispatch({type: STUDENT_ERROR, payload: err});
  }
};
