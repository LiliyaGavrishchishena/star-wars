import React from 'react';

import Residents from './Residents'

const PlanetDescription = ({planet: {name, rotation_period, diameter, climate, gravity, terrain, population, residents}}) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card horizontal">
          <div className="card-content">
            <h4>Detailed Information about {name}</h4>
            <div>Rotation Period - {rotation_period}</div>
            <div>diameter - {diameter}</div>
            <div>Сlimate - {climate}</div>
            <div>Gravity - {gravity}</div>
            <div>Terrain - {terrain}</div>
            <div>population - {population}</div>
            <div>
              <h5>Famous residents:</h5>
              {residents && residents.map(resident => <Residents key={resident} residentUrl={resident}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default PlanetDescription;
