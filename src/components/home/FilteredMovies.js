import React from 'react'
import { Link } from 'react-router-dom';

export default function FilteredMovies({title,year,poster,imdb}) {
    return (
        <div className="col-md-4 mb-5">
        <div className="card card-body btn btn-outline-success text-center h-100 shadow p-3 mb-5 rounded">
          <img className="w-100 mb-2" src={poster} alt="Movie Cover" />
          <h5 className="text-wrap  card-title">
            {title} - {year}
          </h5>
          
          <Link style={{margin:"auto"}}  className="btn btn-warning" to={'/movie/' + imdb}>
          <i className="fas fa-chevron-left" style={{margin:3}} />
            Learn More 
            <i className="fas fa-chevron-right" style={{margin:3}} />
          </Link>
        </div>
      </div>
    )
}
