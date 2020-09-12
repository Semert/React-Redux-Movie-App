import React from 'react';
import FilteredMovies from "./FilteredMovies"

const MovieCard = ({movie, filteredMovies}) => {
    console.log(filteredMovies)
    return (
      <>
      {typeof filteredMovies !== 'undefined' && (filteredMovies.map(filter => <FilteredMovies title={filter.Title}
      poster = {filter.Poster} year = {filter.Year} imdb={filter.imdbID} key={filter.imdbID}/>)) }


    </>
    );
}

export default MovieCard;


