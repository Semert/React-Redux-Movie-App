import React, { useEffect,useRef } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  searchYear,
  fetchMovies,
  setLoading
} from '../../actions/Actions';

const SearchForm = (props) => {
  const textRef = useRef()
  const yearRef = useRef()

  useEffect(()=>{
    props.fetchMovies();
  },[])

  const onChange = e => {
    props.searchMovie(textRef.current.value);
  };

  const onChange2 = e => {
    props.searchYear(yearRef.current.value);
  };

  const onSubmit = e => {
    if(yearRef.current.value !== null && textRef.current.value !== null){
      e.preventDefault();
      props.fetchMovies(textRef.current.value,yearRef.current.value);
      props.setLoading();
    }
    textRef.current.value = null
    yearRef.current.value = null
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
              ref={textRef}
            />
            <input
            style={{borderBottomLeftRadius:200}}

              type="text"
              className="form-control"
              name="year"
              placeholder="Year"
              onChange={onChange2}
              ref ={yearRef}
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
