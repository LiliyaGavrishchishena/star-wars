import React, { useState, useCallback, useEffect } from 'react';

import PlanetsList from '../components/PlanetsList';
import Navigation from '../components/Navigation';

import { useHttp } from '../hooks/http.hook';

const HomePage = () => {
  const [planets, setPlanets] = useState([]);
  const [navigation, setNavigation] = useState({prevUrl: null, nextUrl:null})
  const { request } = useHttp();

  const fetchPlanets = useCallback(async (page='https://swapi.dev/api/planets/?page=1') => {

    try {
      const fetched = await request(page);
      setPlanets(fetched.results);
      setNavigation({prevUrl: fetched.previous, nextUrl: fetched.next});
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
        <Navigation navigation={navigation} fetchPlanets={fetchPlanets}/>
        <PlanetsList planets={planets}/>
      </div>
    </div>
  )
};

export default HomePage;
