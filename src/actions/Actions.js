import { SEARCH_MOVIE, SEARCH_YEAR, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchMovie = (text) => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const searchYear = (year) => dispatch => {
  dispatch({
    type: SEARCH_YEAR,
    payload: year
  });
};

export const fetchMovies = (text,year) => dispatch => {
  console.log(text,year)
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${!text ? "Pokemon" : text}&y=${!year ? "" : year}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};


export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
