import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsList from '../components/PlanetsList';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';

import { useHttp } from '../hooks/http.hook';

const HomePage = () => {
  const [planets, setPlanets] = useState([]);
  const [navigation, setNavigation] = useState({prevUrl: null, nextUrl:null})
  const { loading, request } = useHttp();

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

  if (loading) {
    return <Loader />;
  }

  return <>
  {!loading && <div className="container">
        <div className="paddingTop">
         <Navigation navigation={navigation} fetchPlanets={fetchPlanets}/>
           <PlanetsList planets={planets}/>
        </div>
     </div>}
  </>
};

HomePage.propTypes = {
  navigation:PropTypes.string,
  fetchPlanets:PropTypes.func,
  planets:PropTypes.array,
};

export default HomePage;
