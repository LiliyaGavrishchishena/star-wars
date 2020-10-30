import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import planetImg from '../assets/planet.jpg'

const PlanetItem = ({planet}) => {
  const planetId = planet.url.split("/").reverse()[1];

  return (
    <Link to={`/planets/${planetId}`}>
      <div className="card large">
        <div className="card-image">
          <img alt="planetImg" src={planetImg}/>
          <span className="card-title">{planet.name}</span>
        </div>
        <div className="card-content">
          <div><strong>Climate - </strong>{planet.climate}</div>
          <div><strong>Population: </strong>{planet.population}</div>
        </div>
      </div>
    </Link>
  )
};

PlanetItem.propTypes = {
  planet:PropTypes.object,

}

export default PlanetItem;
