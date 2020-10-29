import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <div className="container">
            <Link to='/'>StarWars</Link>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default AppHeader;
