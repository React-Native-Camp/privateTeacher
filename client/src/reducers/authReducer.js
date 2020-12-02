import {AUTH_ERROR, AUTH_CHANGE} from '../actions/types';
const initialState = {Auth: false};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      console.log('Auth reducer payload : ', action.payload);
      console.log('...state : ', {...state});
      return {...state, Auth: action.payload};
    case AUTH_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};
export default authReducer;
