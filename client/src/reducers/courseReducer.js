import {
  Course_GET_TEACHER_COURSE_By_Id,
  Course_GET_Time_COURSE_By_Id,
  FETCH_ERROR,
  Course_PUSH_TEACHER_COURSE_By_Id,
} from '../actions/types';
const initialState = {
  teacherCourses: [
    {
      id: 1,
      teacherId: 1,
      name: 'Math',
      durtion: '1 hour',
      price: '30$',
    },
    {
      id: 2,
      teacherId: 1,
      name: 'Physics',
      durtion: '3 hour',
      price: '50$',
    },
    {
      id: 3,
      teacherId: 1,
      name: 'Science',
      durtion: '3 hour',
      price: '50$',
    },
  ],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Course_GET_Time_COURSE_By_Id:
      return {...state, coursesTime: action.payload};

    case Course_GET_TEACHER_COURSE_By_Id:
      return {...state, teacherCourses: action.payload};

    case Course_PUSH_TEACHER_COURSE_By_Id:
      console.log('course payload : ', action.payload);
      console.log('...state : ', {...state});
      return {
        ...state,
        teacherCourses: [...state.teacherCourses, action.payload],
      };

    case FETCH_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};
export default courseReducer;
