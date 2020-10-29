import React from 'react';
import PlanetItem from './PlanetItem'

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

export default PlanetsList;
