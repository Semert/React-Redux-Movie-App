import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  searchYear,
  fetchMovies,
  setLoading
} from '../../actions/Actions';

const SearchForm = (props) => {

  useEffect(()=>{
    props.fetchMovies();
  },[])

  const onChange = e => {
    props.searchMovie(e.target.value);
  };

  const onChange2 = e => {
    props.searchYear(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.fetchMovies(props.text,props.year);
    props.setLoading();
  };



    return (
      <div className="jumbotron btn-outline-warning jumbotron-fluid mt-5 text-center border border-success" style={{borderRadius:300}}>
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fab fa-servicestack" /> Search...
          </h1>
          <form id="searchForm" onSubmit={onSubmit}>
            <input
            style={{borderTopRightRadius:300}}
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search for Movies"
              onChange={onChange}
            />
            <input
            style={{borderBottomLeftRadius:200}}

              type="text"
              className="form-control"
              name="year"
              placeholder="Year"
              onChange={onChange2}
            />

            
            <button type="submit" className="btn btn-primary btn-dark mt-3 btn-lg w-50">
              Search
            </button>
          </form>
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
  text: state.movies.text,
  year: state.movies.year
});

export default connect(
  mapStateToProps,
  { searchMovie, searchYear,fetchMovies, setLoading }
)(SearchForm);
