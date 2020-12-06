import {ADD_TEACHER} from '../actions/types';

const initialState = {
  teachersList: [
    {
      id: 1,
      phone: '059855582',
      address: '....',
      age: '...',
      name: 'Stella Russell',
      type: 'teacher',
      avatar:
        'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
      rating: 4,
      subject: ['math', 'Science'],
    },
    {
      id: 2,
      phone: '0599234567',
      address: '....',
      age: '...',
      name: 'Ahmed Salem',
      type: 'teacher',
      avatar:
        'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
      rating: 3,
      subject: ['Design', 'Art'],
    },
  ],
};

const TeachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return {...state, teachersList: [...state.teachersList, action.payload]};
    default:
      return state;
  }
};

export default TeachersReducer;
