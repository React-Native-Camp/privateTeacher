import {FETCH_DEMO, FETCH_ERROR} from './types';

// this demoe just for test
export const fetchDemo = () => (dispatch) => {
  // do your axios or your logic here
  // and reture result in dispatch with type
  try {
    const users = ['TestUser1', 'TestUser2', 'TestUser3', 'TestUser4'];
    dispatch({type: FETCH_DEMO, payload: users});
  } catch (err) {
    dispatch({type: FETCH_ERROR, payload: err});
  }
};

// export const deleteDemo = (dispatch) => (
//   {
//    your code
//   }
// );
