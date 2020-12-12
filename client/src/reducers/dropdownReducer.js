import {DROPDOWN_SELECTED_VALUE} from '../actions/types';
const initialState = {selectedValue: 'select a value'};

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPDOWN_SELECTED_VALUE:
      return {...state, selectedValue: action.payload};

    default:
      return state;
  }
};

export default dropdownReducer;
