import {
  USER_ERROR,
  USER_SAVE_PROFILE,
  USER_SET_TYPE_ERROR,
  USER_SET_TYPE,
  Teacher_SAVE_PROFILE,
} from '../actions/types';
const initialState = {
  userProfile: {
    id: 1,
    name: 'Ahmed Mostafa',
    phone: '05985255',
    address: 'Hebron',
    age: '25',
    type: '',
    avatar: '',
  },
  teacherProfile: {
    id: 1,
    certificate: 'certificate',
    experience: ' experience',
    phone: '059855582',
    address: 'address',
    age: '...',
    name: 'Stella Russell',
    type: 'teacher',
    avatar:
      'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
    rating: 4,
    subject: ['math', 'Science'],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVE_PROFILE:
      return {...state, userProfile: action.payload};
    case Teacher_SAVE_PROFILE: {
      return {...state, teacherProfile: action.payload};
    }

    case USER_SET_TYPE:
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
