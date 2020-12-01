import {STUDENT_ERROR, STUDENT_SAVE_PROFILE} from '../actions/types';
const initialState = {
  StudentProfile: {
    name: 'Ahmed Mostafa',
    phone: '05985255',
    address: 'Hebron',
    age: '25',
  },
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_SAVE_PROFILE:
      console.log('StudentProfile payload : ', action.payload);
      console.log('...state : ', {...state});

      return {...state, StudentProfile: action.payload};

    case STUDENT_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export default studentReducer;
