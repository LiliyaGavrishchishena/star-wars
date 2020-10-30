import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import PropTypes from 'prop-types';

import PlanetNotFound from '../components/PlanetNotFound';
import PlanetDescription from '../components/PlanetDescription'

const PlanetPage = () => {
  const {id} = useParams();
  const [planet, setPlanet] = useState([]);
  const { request, error, clearError } = useHttp();

  const fetchPlanet = useCallback(async () => {
    try {
      clearError()
      const fetched = await request(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(fetched);
    } catch (e) {
      throw e;
    }
  }, [request, clearError, id]);

  useEffect(() => {
    fetchPlanet();
  }, [fetchPlanet]);


  return (
    <div className="container">
      {error && <PlanetNotFound error={error}/>}
      {!error && <PlanetDescription planet={planet}/>}
    </div>
  )
};

PlanetPage.propTypes = {
  error: PropTypes.bool,
  planet:PropTypes.object,
};

export default PlanetPage;
