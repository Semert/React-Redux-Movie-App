import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/Actions';

import Spinner from '../layout/Spinner';

const Movie = (props) => {
  useEffect(() => {
    props.fetchMovie(props.match.params.id);
    props.setLoading();
  },[]) 
   
    const { loading, movie } = props;
    {console.log(movie)}
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body btn-outline-warning">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4 btn-outline-secondary">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item btn-outline-primary">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item btn-outline-success">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item btn-outline-primary">
                <strong>Runtime:</strong> {movie.Runtime}
              </li>
              <li className="list-group-item btn-outline-success">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item btn-outline-primary">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item btn-outline-success">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item btn-outline-primary">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item btn-outline-success">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-outline-danger text-light ml-3">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return (<div>{content}</div>)
  }

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
