import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-warning mb-5">
          <div className="navbar-header">
          <i style={{width:20,marginLeft:7}} className="fas fa-check-double " /> 
            <Link className="navbar-brand text-dark text-lg brand-text" to="/">
              MovieApp
            </Link>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block">
            </li>
            <li className="nav-item d-inline-block text-dark ">
              Mert Efe
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
