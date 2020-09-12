import {
  SEARCH_MOVIE,
  SEARCH_YEAR,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  year: '',
  movies: [],
  loading: false,
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
      case SEARCH_YEAR:
        return {
          ...state,
          year: action.payload,
          loading: false
        };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
