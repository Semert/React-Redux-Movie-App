import React , {useState , useEffect} from 'react';

import { connect } from 'react-redux';

import MovieSection from './MovieSection';
import "./Status.css"


const MoviesContainer = ({movies}) => {
  const [filteredMovies, setFilteredMovies] = useState([])
  const [status, setStatus] = useState()


  useEffect(() => {
    filteredHandler();
  }, [movies.Search,status])

  const filteredHandler = () => {
    switch(status)
    {
      case 'series':
        if(filteredMovies){
          setFilteredMovies(movies.Search.filter(movie => movie.Type === "series")) 
        }
        break; 
      default:
        setFilteredMovies(movies.Search)
        break;
    }
  }
  const statusHandler = (e) =>
  {
    setStatus(e.target.value)
  }


    let content = '';
    content =
      movies.Response === 'True'
        ? (
            <MovieSection  filteredMovies={filteredMovies} />
          )
        : (
          <>
                      <MovieSection  filteredMovies={filteredMovies} />
                      <h2 style={{margin:"auto"}}> Please search with valid "name" OR valid "year". Example : [Batman, 1997]</h2>
          
          </>
        )

    return <> 
            <div className="status selectpicker">
              <select className="custom-select custom-select-lg btn-outline-warning mb-3" style={{width:300}} onChange={statusHandler} name="movies" >
                <option value="all">All</option>
                <option value="series">Series</option>
                <option value="movie">Movies</option>
              </select>
            </div>   
    <div className="row">
      {content}
      </div>
      </>
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
