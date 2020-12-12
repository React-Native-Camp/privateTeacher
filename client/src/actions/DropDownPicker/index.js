import {DROPDOWN_SELECTED_VALUE} from '../types';

export const changeSelectedDropdown = (selctedValue) => (dispatch) => {
  dispatch({
    type: DROPDOWN_SELECTED_VALUE,
    payload: selctedValue,
  });
};
