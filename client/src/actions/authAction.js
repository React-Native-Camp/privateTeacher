import {AUTH_CHANGE, AUTH_ERROR} from './types';
export const AuthChange = (newAuth) => (dispatch) => {
  try {
    console.log('ActionAuth Data  :', newAuth);
    dispatch({type: AUTH_CHANGE, payload: newAuth});
  } catch (err) {
    dispatch({type: AUTH_ERROR, payload: err});
  }
};
