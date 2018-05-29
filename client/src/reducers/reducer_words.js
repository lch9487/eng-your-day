import _ from 'lodash';
import { FETCH_WORD, TEST_WORD } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WORD:
      // return { ...state, [action.payload.data.category]: action.payload.data };
      return [action.payload.data, ...state];
    // case TEST_WORD:
    //   return [action.payload.data, ...state];
    default:
      return state;
  }
}
