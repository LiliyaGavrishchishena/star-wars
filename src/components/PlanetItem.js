import React from 'react';
import { Link } from 'react-router-dom';

import planetImg from '../assets/planet.jpg'

const PlanetItem = ({planet}) => {
  const planetId = planet.url.split("/").reverse()[1];

  return (
    <Link to={`/planets/${planetId}`}>
      <div className="card">
        <div className="card-image">
          <img alt="planetImg" src={planetImg}/>
          <span className="card-title">{planet.name}</span>
        </div>
        <div className="card-content">
          <div>Climate - {planet.climate}</div>
          <div>Population: {planet.population}</div>
        </div>
      </div>
    </Link>
  )
};

export default PlanetItem;
