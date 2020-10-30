import React from 'react';
import PropTypes from 'prop-types';

import Residents from './Residents'

const PlanetDescription = ({planet: {name, rotation_period, diameter, climate, gravity, terrain, population, residents}}) => {

  return (
    <div className="row">
      <div className="col s12">
        <div className="card horizontal">
          <div className="card-content">

            <h4>Detailed Information about {name}</h4>
            <div><strong>Rotation Period - </strong>{rotation_period}</div>
            <div><strong>diameter - </strong>{diameter}</div>
            <div><strong>Сlimate - </strong>{climate}</div>
            <div><strong>Gravity - </strong>{gravity}</div>
            <div><strong>Terrain - </strong>{terrain}</div>
            <div><strong>population - </strong>{population !== "unknown" ? Number(population).toLocaleString('en') : 'No'  } residents</div>
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

PlanetDescription.propTypes = {
  name:PropTypes.string,
  rotation_period:PropTypes.string,
  diameter:PropTypes.string,
  climate:PropTypes.string,
  gravity:PropTypes.string,
  terrain:PropTypes.string,
  population:PropTypes.string,
  residents:PropTypes.array,
}

export default PlanetDescription;
