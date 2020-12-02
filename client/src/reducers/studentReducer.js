import {
  STUDENT_ERROR,
  STUDENT_SAVE_PROFILE,
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

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_SAVE_PROFILE:
      console.log('StudentProfile payload : ', action.payload);
      console.log('...state : ', {...state});

      return {...state, StudentProfile: action.payload};

    case STUDENT_ERROR:
    case USER_SET_TYPE_ERROR:
      return {...state, error: action.payload};
    case USER_SET_TYPE:
      console.log('StudentProfile Type payload : ', action.payload);
      console.log('...state : ', {...state});
      return {
        ...state,
        StudentProfile: {...state.StudentProfile, type: action.payload},
      };

    default:
      return state;
  }
};

export default studentReducer;
