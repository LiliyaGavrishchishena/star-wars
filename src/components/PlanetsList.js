import React from 'react';
import PlanetItem from './PlanetItem'
import PropTypes from 'prop-types';

const PlanetsList = ({planets}) => {
  return (
    <div className="row">
      {planets.map(planet => (
        <div className="col s12 m6 l4 xl3" key={planet.name}>
          <PlanetItem planet={planet}/>
        </div>
      ))}
    </div>
  )
};

PlanetsList.propTypes = {
  planets:PropTypes.array,
}
export default PlanetsList;
