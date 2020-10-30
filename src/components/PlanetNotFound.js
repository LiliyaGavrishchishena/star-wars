import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlanetNotFound = ({error}) => {
  return (
    <div className="row">
      <div className="col s12">
          <div className="card">
            <div className="card-content">
              Planet not found! Try to find another one. {error}
            </div>
            <div className="card-action">
              <Link to="/" className="waves-effect waves-light btn-large blue-grey darken-1">Go to all planets </Link>
            </div>

          </div>
      </div>
    </div>
  )
};

PlanetNotFound.propTypes = {
  error: PropTypes.bool,

};

export default PlanetNotFound;
