import {
  USER_ERROR,
  USER_SAVE_PROFILE,
  USER_SET_TYPE_ERROR,
  USER_SET_TYPE,
} from '../actions/types';
const initialState = {
  StudentProfile: {
    name: 'Ahmed Mostafa',
    phone: '05985255',
    address: 'Hebron',
    age: '25',
    type: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVE_PROFILE:
      return {...state, StudentProfile: action.payload};
    case USER_SET_TYPE:
      console.log('userReducer : ', action);
      return {
        ...state,
        StudentProfile: {...state.StudentProfile, type: action.payload},
      };
    case USER_ERROR:
    case USER_SET_TYPE_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export default userReducer;
