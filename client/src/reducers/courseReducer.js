import {
  Course_GET_TEACHER_COURSE_By_Id,
  Course_GET_Time_COURSE_By_Id,
  Course_BOOK,
  Course_Delete,
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
  coursesTime: [
    [
      {
        label: 'Nov , 20 4:00 PM 1 houre  20$',
        value: 1,
        id: 1,
        courseId: 1,
        teacherId: 1,
      },
      {
        label: 'Nov , 22 2:00 PM 1:30 houre  30$',
        value: 2,
        id: 2,
        courseId: 1,
        teacherId: 1,
      },
      {
        label: 'Nov , 25 1:00 PM 2 houre  40$',
        value: 3,
        id: 3,
        courseId: 1,
        teacherId: 1,
      },
      {
        label: 'Nov , 28 3:00 PM 3 houre  60$',
        value: 4,
        id: 4,
        courseId: 1,
        teacherId: 1,
      },
    ],
    [
      {
        label: 'Nov , 20 4:00 PM 1 houre  20$',
        value: 1,
        id: 1,
        courseId: 2,
        teacherId: 1,
      },
      {
        label: 'Nov , 22 2:00 PM 1:30 houre  30$',
        value: 2,
        id: 2,
        courseId: 2,
        teacherId: 1,
      },
      {
        label: 'Nov , 25 1:00 PM 2 houre  40$',
        value: 3,
        id: 3,
        courseId: 2,
        teacherId: 1,
      },
      {
        label: 'Nov , 28 3:00 PM 3 houre  60$',
        value: 4,
        id: 4,
        courseId: 2,
        teacherId: 1,
      },
    ],
    [
      {
        label: 'Nov , 20 4:00 PM 1 houre  20$',
        value: 1,
        id: 1,
        courseId: 3,
        teacherId: 1,
      },
      {
        label: 'Nov , 22 2:00 PM 1:30 houre  30$',
        value: 2,
        id: 2,
        courseId: 3,
        teacherId: 1,
      },
      {
        label: 'Nov , 25 1:00 PM 2 houre  40$',
        value: 3,
        id: 3,
        courseId: 3,
        teacherId: 1,
      },
      {
        label: 'Nov , 28 3:00 PM 3 houre  60$',
        value: 4,
        id: 4,
        courseId: 3,
        teacherId: 1,
      },
    ],
  ],
  studentBookds: [{teacherId: 1, courseId: 1, studentId: 1, timeId: 1}],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Course_GET_Time_COURSE_By_Id:
      return {...state, selectedCoursesTime: action.payload};

    case Course_GET_TEACHER_COURSE_By_Id:
      return {
        ...state,
        teacherCourses: [...state.teacherCourses, action.payload],
      };

    case Course_PUSH_TEACHER_COURSE_By_Id:
      return {
        ...state,
        teacherCourses: [...state.teacherCourses, action.payload],
      };
    case Course_BOOK:
      return {
        ...state,
        studentBookds: [...state.studentBookds, action.payload],
      };

    case Course_Delete:
      console.log('Deletrew : ', action);

      try {
        const temp = [...state.teacherCourses];
        const index = temp?.findIndex(
          (x) =>
            x.id == action.payload.courseId &&
            x.teacherId == action.payload.teacherId,
        );
        temp.splice(index, 1);

        return {
          ...state,
          teacherCourses: temp,
        };
      } catch (err) {
        console.log('err temp : ', err);
        return {...state, error: err};
      }

    case FETCH_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};
export default courseReducer;
