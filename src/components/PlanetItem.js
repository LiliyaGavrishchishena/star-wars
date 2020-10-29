import React from 'react';

import planetImg from '../assets/planet.jpg'

const PlanetItem = ({planet}) => {
  return (
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
  )
};

export default PlanetItem;
