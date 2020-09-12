import { combineReducers } from 'redux';
import searchReducer from './Reducer';

export default combineReducers({
  movies: searchReducer
});
