import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import WordsReducer from './reducer_words';
// import ActiveWord from './reducer_active_word';

const rootReducer = combineReducers({
  words: WordsReducer,
  form: formReducer,
});

export default rootReducer;
