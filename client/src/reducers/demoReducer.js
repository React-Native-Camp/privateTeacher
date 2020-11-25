import {FETCH_ERROR, FETCH_DEMO} from '../actions/types';
const initialState = {users: []};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEMO:
      return {...state, users: action.payload};

    case FETCH_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export default demoReducer;
