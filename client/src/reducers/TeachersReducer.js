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
      name: 'Fatima Ahmed',
      type: 'teacher',
      avatar:
        'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
      rating: 5,
      subject: ['Physics', 'Chemistry'],
    },
    {
      id: 3,
      phone: '0599234567',
      address: '....',
      age: '...',
      name: 'Ahmed Salem',
      type: 'teacher',
      avatar:
        'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
      rating: 5,
      subject: ['Design', 'Art'],
    },
    {
      id: 4,
      phone: '0599234567',
      address: '....',
      age: '...',
      name: 'Hammam Adem',
      type: 'teacher',
      avatar:
        'https://res.cloudinary.com/dzc3adf4j/image/upload/v1606927322/teacher_ngmzr2.png',
      rating: 2,
      subject: ['English', 'Arabic'],
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
