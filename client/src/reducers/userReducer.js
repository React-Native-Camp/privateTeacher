import {
  USER_ERROR,
  USER_SAVE_PROFILE,
  USER_SET_TYPE_ERROR,
  USER_SET_TYPE,
} from '../actions/types';
const initialState = {
  userProfile: {
    name: 'Ahmed Mostafa',
    phone: '05985255',
    address: 'Hebron',
    age: '25',
    type: '',
    avatar: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVE_PROFILE:
      return {...state, userProfile: action.payload};
    case USER_SET_TYPE:
      console.log('userReducer : ', action);
      return {
        ...state,
        userProfile: {...state.userProfile, type: action.payload},
      };
    case USER_ERROR:
    case USER_SET_TYPE_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export default userReducer;
