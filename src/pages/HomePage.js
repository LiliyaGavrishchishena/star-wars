import React, { useState, useCallback, useEffect } from 'react';

import PlanetsList from '../components/PlanetsList';
import { useHttp } from '../hooks/http.hook';

const HomePage = () => {
  const [planets, setPlanets] = useState([]);
  const { request } = useHttp();

  const fetchPlanets = useCallback(async () => {
    try {
      const fetched = await request(`https://swapi.dev/api/planets/?page=1`);
      setPlanets(fetched.results);
    } catch (e) {
      throw e;
    }
  }, [request]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <div className="container">
      <div className="paddingTop">
        <PlanetsList planets={planets}/>
      </div>
    </div>
  )
};

export default HomePage;
