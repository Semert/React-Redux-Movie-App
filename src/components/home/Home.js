import React from 'react';

import { connect } from 'react-redux';

import Form from './Form';
import Movies from './Movies';
import Spinner from '../layout/Spinner';

const Landing = ({loading}) => {
    return (
      <div className="container">
        <Form />
        {loading ? <Spinner /> : <Movies />}
      </div>
    );
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
